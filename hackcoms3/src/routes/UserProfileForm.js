import { useState } from "react";
import Majors from "../utils/majors";



export default function UserProfile({setYear, setMajor, setInterests, getCourses, setCourses}) {

    const [currentCourseEntry, setCurrentCourseEntry] = useState('')

    const renderCourses = () => {
        return getCourses.map((course) => {
            return (
                <div className="flex justify-center p-1">
                    <button 
                    className="btn btn-outline btn-error btn-wide btn-sm w-full"
                    onClick={() => setCourses(getCourses.filter(a => a !== course))}
                    >
                    Remove {course}
                    </button>
                </div>
            )
        })
    }

    return (
    <>
        <div className="border-2 border-slate-500 w-full rounded-md p-4">
            <div className="label">
                <div className="label-text text-xl text-black">
                    Tell us about yourself
                </div>
            </div>
            <div>
                <select 
                    className="select select-bordered w-full max-w-xs"
                    onChange={(e) => {
                        setYear(e.target.value)
                    }}
                >
                    <option disabled selected>Select Year</option>
                    <option>Freshman</option>
                    <option>Sophmore</option>
                    <option>Junior</option>
                    <option>Senior</option>
                </select>
            </div>
            <div className="p-4"></div>
            <div>
                <select 
                    className="select select-bordered w-full max-w-xs"
                    onChange={(e) => {
                        setMajor(e.target.value)
                    }}
                >
                <option disabled selected>Current Major</option>
                {Majors().map((major) => <option>{major}</option>)}
                </select>
            </div>
            <div className="p-2"></div>
            <hr></hr>
            <div className="pt-2">
                <h1 className="text-xl text-stone-800">Current Coursework</h1>
                {renderCourses()}
            </div>
            <div>
                <input 
                type="text" 
                placeholder="Enter a Course (e.g. CSCI-141)" 
                className="input input-bordered w-full"
                onChange={(e) => setCurrentCourseEntry(e.target.value)}
                ></input>
            </div>

            <div className="pt-4"></div>
            <div className="flex justify-center">
                <button className="btn btn-success btn-wide text-white btn-sm" onClick={() => {
                    setCourses([...getCourses, currentCourseEntry])
                }}>
                Add Course
                </button>
            </div>


            <div className="p-2"></div>
            <div>
                <h1 className="text-xl text-stone-800">A little Biography</h1>
                <textarea 
                className="textarea textarea-primary w-full max-w-xs" 
                placeholder="Bio"
                onChange={(e) => setInterests(e.target.value)}
                >
                </textarea>
            </div>
        </div>

    </>
    );
}