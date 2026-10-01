"use client";

import { useEffect, ReactNode } from "react";

/**
 * TactileAudio Synthesizer
 * Generates an ultra-subtle mechanical tactile click via Web Audio API.
 * Zero external files (0 KB), zero loading latency, and context-aware decay.
 */
class TactileAudio {
  private ctx: AudioContext | null = null;

  private getContext(): AudioContext | null {
    if (typeof window === "undefined") return null;
    if (!this.ctx) {
      const AudioCtx =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === "suspended") {
      this.ctx.resume();
    }
    return this.ctx;
  }

  playClick() {
    try {
      const ctx = this.getContext();
      if (!ctx) return;

      const now = ctx.currentTime;

      // Primary tactile oscillator
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      // Bandpass filter gives it an authentic subtle mechanical switch sound
      const filter = ctx.createBiquadFilter();
      filter.type = "bandpass";
      filter.frequency.setValueAtTime(800, now);
      filter.Q.setValueAtTime(1.8, now);

      osc.type = "sine";
      // Quick pitch drop: 650Hz -> 140Hz in 15ms (tactile key switch profile)
      osc.frequency.setValueAtTime(650, now);
      osc.frequency.exponentialRampToValueAtTime(140, now + 0.015);

      // Soft volume envelope: low 9% volume, decaying smoothly in 18ms
      gain.gain.setValueAtTime(0.09, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.018);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now);
      osc.stop(now + 0.02);
    } catch {
      // Gracefully silent if audio context is blocked
    }
  }
}

export const tactileAudio = new TactileAudio();

export function SoundProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    // Delegated event listener for all interactive clicks
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      // Trigger tactile audio for all buttons, links, and clickable roles
      const isInteractive = target.closest("button, a, [role='button'], input[type='submit']");
      if (isInteractive) {
        tactileAudio.playClick();
      }
    };

    window.addEventListener("click", handleClick, { capture: true });
    return () => window.removeEventListener("click", handleClick, { capture: true });
  }, []);

  return <>{children}</>;
}
