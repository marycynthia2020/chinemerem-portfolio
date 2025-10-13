'use client'
import { useParams } from "next/navigation"

export default function projectDetails(){
    const {projectName} = useParams()

    return(
        <div>project {projectName}</div>
    )
}