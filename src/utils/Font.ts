import localFont from 'next/font/local'

export const poppinsBold = localFont({
  src: [
    {
      path: '../assets/font/Poppins-Bold.ttf',
      weight: '700',
    },
  ],
  variable: '--font-poppins-bold',
})

export const poppinsMedium = localFont({
  src: [
    {
      path: '../assets/font/Poppins-Medium.ttf',
      weight: '500',
    },
  ],
  variable: '--font-poppins-medium',
})

export const poppinsLight = localFont({
  src: [
    {
      path: '../assets/font/Poppins-Light.ttf',
      weight: '300',
    },
  ],
  variable: '--font-poppins-light',
})
