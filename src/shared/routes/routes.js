export const onboardingRoute = () => `/onboarding`
export const dashboardRoute = () => `/home`
export const loginRoute = () => `${onboardingRoute()}/login`
export const registerRoute = () => `${onboardingRoute()}/register`
export const orderRoute = () => `${dashboardRoute()}/orders`
export const cartRoute = () => `${orderRoute()}/cart`