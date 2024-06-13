import DokumenDetail from '@/components/DokumenDetail/DokumenDetail'
import React from 'react'

export default function DokumenDetailPage() {
  return (
    <DokumenDetail userType='citizen'  params={{
      id: '',
      slug: ''
    }} />
  )
}
