export const getdata = async() =>  {
   const respose = await fetch("https://api.openverse.org/v1/images/", 
        {
            method:"GET",
        });

        return await respose.json();
};