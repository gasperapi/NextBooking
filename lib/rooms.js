'use server'
import {Rooms} from "@/app/models"
export async function addRooms(rooms) {
    const newRooms ={
        label: rooms.label,
        type:rooms.type,
        remaining:rooms.remaining,
    }
    try {
        await Rooms.create(newRooms)
    } catch (error) {
        throw error
    }
}
