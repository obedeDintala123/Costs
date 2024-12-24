import { useEffect, useState } from 'react';
import '../../assents/styles/output.css';
const Mensagem = ({type, msg}) => {
    
    const [visible, setVisible] = useState(false)

    useEffect(() => {

        if(!msg){
            setVisible(false)
            return
        }

        setVisible(true)

        const timer = setTimeout(() => {
            setVisible(false);
        }, 3000)

        return () => clearTimeout(timer)

    }, [msg])

    return (
       <>
       {visible && (
        <div className={type === 'success' ? 'w-full p-4 border-[#C3E6CB] m-z-auto text-center mb-4 rounded text-[#155724] bg-[#D4EDDA]' : type === 'error' ? 'w-full p-4 border-[#F5C6CB] m-z-auto text-center mb-4 rounded text-[#721C24] bg-[#F8D7DA]' : null}>{msg}</div>
       )}
       </>
    )
}

export default Mensagem;

