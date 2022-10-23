import React, { useState } from 'react'
import Modal from 'react-modal';
import StarRating from './StarRating';


const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root');

const AddMovie = ({add}) => {

    const [modalIsOpen, setIsOpen] = React.useState(false);
    const [name,setName]=useState('');
    const [rating,setRating]=useState('1');
    const [image,setImage]=useState('');
    const [date,setDate]=useState('');


    function openModal() {
      setIsOpen(true);
    }
  
  
    function closeModal() {
      setIsOpen(false);
    }
    //handle submit
    const handleSubmit = (e) =>{
      e.preventDefault();
      const newMovie ={
        id:Math.random(),
        name,
        date,
        rating,
        image
      }
      add(newMovie)
      closeModal()
    }
    //handle the rating
    const handleRating = (x) => setRating(x)
  return (
    <div>
         <button className='btn add-movie-btn' onClick={openModal}>Add Movie</button>
      <Modal
        isOpen={modalIsOpen}
    
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <form onSubmit={handleSubmit}>
          <label> Name </label>
          <input
           type='text'
            value={name} 
            onChange={(e)=>setName(e.target.value)}
            required
            />
          <label> Date </label>
          <input
           type='date' 
           value={date} 
           onChange={(e)=>setDate(e.target.value)}
           required 
           />
          <label> Rating </label>
          <StarRating 
          handleRating={handleRating}
           rating={rating}
           />
          <label> Poster </label>
          <input
           type='url' 
           value={image}
            onChange={(e)=>setImage(e.target.value)}
            required
            />
          <div>
          <button className="btn btn-primary">Confirm</button>
          <button  className="btn btn-danger" >Cancel</button>
          </div>
        </form>
      </Modal>
    </div>
  )
}

export default AddMovie