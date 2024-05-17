/** @type {import('next').NextConfig} */
 
const NextConfig = {
    images:{
        remotePatterns:[{
            protocol:'https',
            hostname:'res.cloudinary.com'
        }]
    },
    experimental:{
        serverActions:{
            bodySizeLimit:'20mb'
        }

    }
    
}


export default NextConfig