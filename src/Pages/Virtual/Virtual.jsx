import React from 'react'
import './virtual.css'
import shade from "../../assets/shade.png";
import left from "../../assets/before.png";
import ReactCompareImage from 'react-compare-image';
import right from "../../assets/after.png";
const Virtual = () => {
    return (
        <>
            <div className="virtual-md flex my-24 justify-around p-8">
                <div className="left-v relative flex flex-col gap-8">
                    <span>VIRTUAL TRY-ON</span>
                    <span>NEVER BUY THE WRONG SHADE AGAIN!</span>
                    <span>Try Now!</span>
                    <img className='w-40' src={shade} alt="" />
                </div>
                <div className="right-v">
                    <div className="w-30">
                        <ReactCompareImage
                            leftImage={left}
                            rightImage={right}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Virtual