import React, { useState, useEffect } from "react"

const Raffle = ({id, name, account, raffle, token, web3Handler, slots, allowance, setAllowance, 
    lastWinner, totalPayouts, totalBurn, isSlotFilled, requestEndRaffle}) => {

    const enterRaffle = async(slotId) => {
        console.log("Enter Raffle " + id + " for slot " + slotId)

        if (account == null) {
            await web3Handler();
        }

        if (parseInt(allowance) == 0) {
            console.log("Approve")
            await token.approve(raffle.address, toWei(10_000_000_000))
            let all = fromWei(await token.allowance(acc, raffle.address))
            setAllowance(all)
        }

        await raffle.play(slotId)
    }

    const pullOutRaffle = async(slotId) => {
        console.log("Leave Raffle " + id + " from slot " + slotId)

        if (account == null) {
            await web3Handler();
        }

        await raffle.pullOut(slotId)
    }

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
                                item.address != "0x0000000000000000000000000000000000000000" ? (
                                    <div key={idx} className="raffle-slot raffle-slotTaken" onClick={() => pullOutRaffle(idx)}>
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
                <div className="col">Last Winner: {lastWinner}</div>
            </div>
            <div className="raffle-last-winner row mt-4">
                <div className="col">Total Payouts: {totalPayouts}</div>
            </div>
            <div className="raffle-last-winner row mt-4">
                <div className="col">Total Burnt: {totalBurn}</div>
            </div>

            {isSlotFilled ? (
                <div className="raffle-slot raffle-slotFree raffle-card-text" onClick={() => requestEndRaffle()}>
                    Find out who won!
                </div>
            ) : (
                <></>
            )}
        </div>
    );
};

export default Raffle;