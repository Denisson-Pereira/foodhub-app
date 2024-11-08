import React from "react"

export interface ICartModelo {
    subtotal: number
    tax: number
    delivery: number
    total: number
    setSubtotal: React.Dispatch<React.SetStateAction<number>>
    setTax: React.Dispatch<React.SetStateAction<number>>
    setDelivery: React.Dispatch<React.SetStateAction<number>>
    setTotal: React.Dispatch<React.SetStateAction<number>>
}