import { useAuthContext} from "../context/useAuthContext";
import { toast } from "react-toastify";
import { useRevalidator } from "react-router";
import { serverPath } from "../settings"

const useCrud = () => {

  const revalidator = useRevalidator(); 
  
  const { token } = useAuthContext();
 const authHeader = token ? { Authorization: `Bearer ${token}` } : {};

  const create = async (endpoint, formData) => {
    try {
      const response = await fetch(`${serverPath}/${endpoint}`, {
      method: "POST",
      body: formData,
      /* headers: authHeader, */
    });
    
    if (!response.ok) {
      throw new Error("Fejl ved oprettelse");
    }
      toast.success("Oprettet!");
      revalidator.revalidate();
      return await response.json();
      
    } catch (error) {
      toast.error("Der skete en fejl");
      throw error;
    }
};

const remove = async (endpoint, id) => {
  try {
    const res = await fetch(`${serverPath}/${endpoint}/${id}`, {
      method: "DELETE",
      headers: authHeader,
    });
    
    if (!res.ok) {
      throw new Error("Kunne ikke slette");
    }

    toast.success("Slettet!");
    revalidator.revalidate();
    return await res.json();

  } catch (error) {
    toast.error("Der skete en fejl");
    throw error;
  }
}

const update = async (endpoint, formData) => {
  try {
    const res = await fetch(`${serverPath}/${endpoint}`, {
      method: "PUT",
      headers: authHeader,
      body: formData,
    })

    if(!res.ok) {
      throw new Error("Kunne ikke opdatere")
    }

    toast.success("Opdateret!")
    revalidator.revalidate();
    return await res.json();

  } catch (error) {
    toast.error("Kunne ikke opdatere");
    throw error;
  }
}

  return {
    create,
    update,
    remove,
    isLoading: false,
    error: null,
  };
};

export { useCrud };

