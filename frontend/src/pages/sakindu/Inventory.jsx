import React, { useState,useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function AllEquipment() {
  const [equipment, setEquipment] = useState([]);

  useEffect(() => {
    fetchEquipment();
  }, []);

  const fetchEquipment = async () => {
    try {
      const res = await axios.get("http://localhost:5000/equipment/");
      setEquipment(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const deleteEquipment = async (id) => {
    const confirmed = window.confirm("Are you sure you want to delete this Equipment?");
    if (confirmed) {
      try {
        await axios.delete(`http://localhost:5000/equipment/delete/${id}`);
        alert("Equipment deleted successfully!");
        fetchEquipment(); // Call fetchEquipment to refresh the list
      } catch (error) {
        console.error('Error deleting Equipment:', error);
        alert('Equipment deletion failed.');
      }
    }
  };

return (
    <>
        <section className="max-w-4xl p-6 mx-auto bg-indigo-600 rounded-md shadow-md dark:bg-gray-800 mt-20">
            <h1 className="text-xl font-bold text-white capitalize dark:text-white">Inventory</h1>
            <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                {equipment.map((equip) => (
                    <div key={equip._id} className="bg-white dark:bg-gray-800 rounded-md shadow-md">
                        <div class="flex justify-center items-center">
                            <img
                                src={"http://localhost:5000/EquipmentImages/"+ equip.equipmentImage}
                                alt={equip.equipmentImage}
                                className="w-auto h-auto sm:h-48 object-cover rounded-t-md"
                            />
                        </div>
                        <div className="p-4">
                            <h2 className="text-xl font-semibold text-gray-800 dark:text-white">{equip.equipmentName}</h2>
                            <p className="text-gray-600 dark:text-gray-300 mt-2">Rs. {equip.equipmentPrice}</p>
                            <p className="text-gray-600 dark:text-gray-300 mt-2">{equip.equipmentType}</p>
                            <p className="text-gray-600 dark:text-gray-300 mt-2">Qty  {equip.equipmentQuantity}</p>
                        </div>
                        <div className="flex justify-end mb-1">
                            <button class="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded mr-3"  onClick={() => deleteEquipment(equip._id)}>Delete</button>
                            <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded mr-1"><Link to={`/updateequipment/${equip._id}`} state={{ equipmentToEdit : equip }}>Update</Link></button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    </>
);
}   

export default AllEquipment;