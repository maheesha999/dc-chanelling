import React, { useContext, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import { useEffect } from 'react'

const Doctors = () => {

  const { speciality } = useParams()
  const [filterDoc,setFilterDoc] = useState([])
  const [showFilter,setShowFilter] = useState(false)
  const navigate = useNavigate()

  const {doctors} = useContext(AppContext)

  const applyFilter = () => {
    if (speciality) {
      setFilterDoc(doctors.filter(doc => doc.speciality === speciality))
    }else {
      setFilterDoc(doctors)
    }
  }

  useEffect(()=>{
    applyFilter()
  },[doctors,speciality])

  return (
    <div>
      <p className='text-gray-600'>Browse through the doctors specialist.</p>
      <div className='flex flex-col sm:flex-row items-start gap-5 mt-5'>
        <button className={`py-1 px-3 border rounded text-sm transition-all sm:hidden ${showFilter ? 'bg-primary text-white' : ''}`} onClick={()=>setShowFilter(prev => !prev)}>Filters</button>
        <div className={`flex flex-col gap-4 text-sm text-gray-600 ${showFilter ? 'flex' : 'hidden sm:flex'}`}>
          <p onClick={()=> speciality === 'General' ? navigate('/doctors') : navigate('/doctors/General') } className={`W-[94VW] SM:W-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "General" ? "bg-indigo-100 text-black" : ""}` }>General</p>
          <p onClick={()=> speciality === 'Panchakarma' ? navigate('/doctors') : navigate('/doctors/Panchakarma') } className={`W-[94VW] SM:W-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Panchakarma" ? "bg-indigo-100 text-black" : ""}`}>Panchakarma</p>
          <p onClick={()=> speciality === 'Orthopedic' ? navigate('/doctors') : navigate('/doctors/Orthopedic') } className={`W-[94VW] SM:W-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Orthopedic" ? "bg-indigo-100 text-black" : ""}`}>Orthopedic</p>
          <p onClick={()=> speciality === 'Gynecology' ? navigate('/doctors') : navigate('/doctors/Gynecology') } className={`W-[94VW] SM:W-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Gynecology" ? "bg-indigo-100 text-black" : ""}`}>Gynecology</p>
          <p onClick={()=> speciality === 'Pediatric' ? navigate('/doctors') : navigate('/doctors/Pediatric') } className={`W-[94VW] SM:W-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Pediatric" ? "bg-indigo-100 text-black" : ""}`}>Pediatric</p>
          <p onClick={()=> speciality === 'ENT' ? navigate('/doctors') : navigate('/doctors/ENT') } className={`W-[94VW] SM:W-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "ENT" ? "bg-indigo-100 text-black" : ""}`}>ENT</p>
          <p onClick={()=> speciality === 'Neurology' ? navigate('/doctors') : navigate('/doctors/Neurology') } className={`W-[94VW] SM:W-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Neurology" ? "bg-indigo-100 text-black" : ""}`}>Neurology</p>
          <p onClick={()=> speciality === 'Gastrocardiac' ? navigate('/doctors') : navigate('/doctors/Gastrocardiac') } className={`W-[94VW] SM:W-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Gastrocardiac" ? "bg-indigo-100 text-black" : ""}`}>Gastrocardiac</p>
        </div>
        <div className='w-full grid grid-cols-auto gap-4 gap-y-6'>
          {
            filterDoc.map((item,index)=>(
              <div onClick={()=>navigate(`/appointment/${item._id}`)} className='border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500' key={index}>
                  <img className='bg-blue-50' src={item.image} alt="" />
                  <div className='p-4'>
                      <div className='flex items-center gap-2 text-sm text-center text-green-500'>
                          <p className='w-2 h-2 bg-green-500 rounded-full'></p><p>Available</p>
                      </div>
                      <p className='text-gray-900 text-lg font-medium'>{item.name}</p>
                      <p className='text-gray-600 text-sm'>{item.speciality}</p>
                  </div>
               </div>
          ))
          }
        </div>
      </div>
    </div>
  )
}

export default Doctors
