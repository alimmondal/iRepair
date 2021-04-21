import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Sidebar from "../../Dashboard/Sidebar/Sidebar";
import Navbar from "../../Shared/Navbar/Navbar";

const AddServices = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [imageURL, setImageURL] = useState(null);

  const onSubmit = (data) => {
    const serviceData = {
      name: data.name,
      email: data.email,
      price: data.price,
      description: data.description,
      imageURL: imageURL,
    };
    const url = `http://localhost:5000/addServices`;
    console.log(serviceData);

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(serviceData),
    }).then((res) => console.log("server side response", res));
  };

  const handleImageUpload = (event) => {
    const imageData = new FormData();
    imageData.set("key", "bc49d8a4e8fcfa0955507231e6a73408");
    imageData.append("image", event.target.files[0]);

    axios.post("https://api.imgbb.com/1/upload", imageData)
      .then(function (response) {
        setImageURL(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="">
      <Navbar></Navbar >
      <div >
        <div style={{display:'flex',justifyContent: 'space-evenly'}} className="container-fluid row">
            <div className="col-md-2">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-2">
          
            </div>
            <div className="col-md-8">
              <h1> Add Services here</h1>
              <form onSubmit={handleSubmit(onSubmit)}>
                <p>Product name</p>
                <input
                  name="name"
                  defaultValue="Service Name"
                  {...register("name")}
                />
                <br/>
                <p>Your email</p>
                <input
                  name="email" type="email"
                  defaultValue="email"
                  {...register("email")}
                />
                <br />
                <br />
                <p>Description</p>
                <input name="description" type="text" defaultValue="description" {...register("description")} />
                <br />
                <br />
                <p>price</p>
                <input name="price" type="number" defaultValue="price" {...register("price")} />
                <br />
                <br />
                <p>Photo:</p>
                <input type="file" onChange={handleImageUpload} />
                <br />
                <br />
                <input type="submit" />
              </form>
            </div>
        </div>
        

      
        
      </div>
      
    </div>
  );
};

export default AddServices;
