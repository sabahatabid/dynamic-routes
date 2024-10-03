import Link from "next/link"
export default function Country(){
    return(
        
        <div className="flex justify-center" style={{backgroundColor:"lightgrey"}}>
        <div className="flex flex-row items-center justify-evenly bg-black text-white p-2 m-1 rounded w-80">
       <Link href="/country/pakistan">Pakistan</Link><br></br><br></br>
       <Link href="/country/india">india</Link><br></br><br></br>
       <Link href="/country/taiwan">taiwan</Link>
       </div>
        </div>
    )
}