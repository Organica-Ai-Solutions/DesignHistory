'use client'

import { useEffect } from 'react'

declare global {
  interface Window {
    gtag?: (...args: any[]) => void
  }
}

export function Analytics() {
  useEffect(() => {
    // Simple page view tracking
    const trackPageView = () => {
      if (typeof window !== 'undefined') {
        // Track page view
        console.log('Page view tracked:', window.location.href)
        
        // If you have Google Analytics, uncomment and add your GA_MEASUREMENT_ID:
        // if (window.gtag) {
        //   window.gtag('config', 'GA_MEASUREMENT_ID', {
        //     page_location: window.location.href,
        //     page_title: document.title,
        //   })
        // }
      }
    }

    trackPageView()
  }, [])

  return null
}

export function trackEvent(eventName: string, parameters?: Record<string, any>) {
  if (typeof window !== 'undefined') {
    console.log('Event tracked:', eventName, parameters)
    
    // If you have Google Analytics, uncomment:
    // if (window.gtag) {
    //   window.gtag('event', eventName, parameters)
    // }
  }
} 