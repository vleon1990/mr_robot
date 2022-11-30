import { useState } from 'react'

import {createContext, useContext} from 'react'

export const LinkContext = createContext()

export const useLinks = () => useContext(LinkContext)

export const LinksProvider = ({children}) => {

    const [showmulti, setShowMulti] = useState([])
    const handleMulti = () => {
        setShowMulti(!showmulti);
    };

    const [showmac, setShowMac] = useState([])
    const handleMac = () => {
        setShowMac(!showmac);
    };

    const [showocr, setShowOcr] = useState([])
    const handleOcr = () => {
        setShowOcr(!showocr);
    };

    const [showdocker, setShowDocker] = useState([])
    const handleDocker = () => {
        setShowDocker(!showdocker);
    };

    const [showcollaz, setShowCollaz] = useState([])
    const handleCollaz = () => {
        setShowCollaz(!showcollaz);
    };

    const [showdron, setShowDron] = useState([])
    const handleDron = () => {
        setShowDron(!showdron);
    };

    const [shownet, setShowNet] = useState([])
    const handleNet = () => {
        setShowNet(!shownet);
    };

    const svgRotateRight = {
        hidden: { rotate: -180 },
        visible: { rotate: 0, transition: { duration : 5 }}
    }
        
    const svgRotateLeft = {
        hidden: { rotate: 180 },
        visible: { rotate: 0, transition: { duration : 8 }}
    }

    const [openMulti, setOpenMulti] = useState(false)
    const [openCollaz, setOpenCollaz] = useState(false)
    const [openDron, setOpenDron] = useState(false)
    const [openMac, setOpenMac] = useState(false)
    const [openOcr, setOpenOcr] = useState(false)
    const [openDocker, setOpenDocker] = useState(false)

    return (
        <LinkContext.Provider value={{
            showmulti,handleMulti,
            showmac,handleMac,
            showocr,handleOcr,
            showdocker,handleDocker,
            showcollaz,handleCollaz,
            showdron,handleDron,
            shownet,handleNet,
            svgRotateRight,svgRotateLeft,
            openMulti,setOpenMulti,
            openCollaz,setOpenCollaz,
            openDron,setOpenDron,
            openMac,setOpenMac,
            openOcr,setOpenOcr,
            openDocker,setOpenDocker
            }}>
        {children}
        </LinkContext.Provider>
    )
}