import React, { useState, useEffect } from "react"

const Raffle = ({id, name}) => {
    const [slots, setSlots] = useState([])

    const enterRaffle = async(slotId) => {
        console.log("Enter Raffle " + id + " for slot " + slotId)
        // todo: call smart contract to enter the raffle
    }


    const loadSlots = async() => {
        // todo: load slot information from smart contract

        let slotsTemp = [
            { address: "0xd71e736a7ef7a9564528d41c5c656c46c18a2aed" },
            { address: "0xd71e736a7ef7a9564528d41c5c656c46c18a2aed" },
            { address: "0xd71e736a7ef7a9564528d41c5c656c46c18a2aed" },
            { address: "0xd71e736a7ef7a9564528d41c5c656c46c18a2aed" },
            { address: "0xd71e736a7ef7a9564528d41c5c656c46c18a2aed" },
            { address: "" },
            { address: "" },
            { address: "" },
            { address: "" },
            { address: "" },
            { address: "" },
        ]

        setSlots(slotsTemp)
    }

    useEffect(() => {
        loadSlots()
    }, [])

    return (
        <div className="col mx-auto overflow-hidden raffle-column">
            <div className="row">
                <div className="card bg-dark mb-2">
                    <div className="card-header raffle-card-header">{name}</div>
                </div>
                <div className="card bg-dark">
                    <div className="card-body bg-secondary">
                        <div className="card-text raffle-card-text">
                            {slots.map((item, idx) => (
                                item.address != "" ? (
                                    <div key={idx} className="raffle-slot raffle-slotTaken">
                                        {item.address.slice(0, 10) + '...' + item.address.slice(32, 42)}
                                    </div>
                                ) : (
                                    <div key={idx} className="raffle-slot raffle-slotFree" onClick={() => enterRaffle(idx)}>
                                        Click to Enter {name}
                                    </div>
                                )
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="raffle-last-winner row mt-4">
                <div className="col">Last Winner: 0xd71e736a7ef7a9564528d41c5c656c46c18a2aed</div>
            </div>
        </div>
    );
};

export default Raffle;