/** @type {import('next').NextConfig} */
 
const NextConfig = {
    experimental:{
        serverActions:{
            bodySizeLimit:'20mb'
        }

    }
    
}


export default NextConfig