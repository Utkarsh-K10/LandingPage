export const getTest = async () => {
    try {
        const res = await fetch('http://localhost:8080/student', {
            method:"GET",
            headers:{
                Accept:"application/json",
                "Content-Type":"application/json"
            },
        });
        return await res.json();
    } catch (error) {
        console.log(error)
    }
}