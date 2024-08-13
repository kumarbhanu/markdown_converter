import {marked} from 'marked'
export const convert=async(req,res)=>{
   
    try {
        const { markdown } = req.body;
      
        const html = marked(markdown);
        res.status(200).json({ html }); 
    } catch (error) {
        console.log(error)
        res.status(404).json({message:error})
    }
     
}