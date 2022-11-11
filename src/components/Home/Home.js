import React, { useEffect, useState } from 'react'
import "./Home.scss"
import Premier from "../../Img/1.jpg"
import deuxieme from "../../Img/2.jpg"
import Troisieme from "../../Img/3.jpg"
import Quatrieme from "../../Img/4.jpg"
import Cinquieme from "../../Img/6.jpg"

const Home = () => {



    const [spin, setSpin] = useState(false)
    const [ring1, setRing1] = useState()
    const [ring2, setRing2] = useState()





    function row1() {

        if (!spin) {
            return (
                <>
                    <div className="ringEnd"><img src={Premier} alt="" /></div>
                    <div className="ringEnd"><img src={Troisieme} alt="" /></div>
                    <div className="ringEnd"><img src={deuxieme} alt="" /></div>
                    <div className="ringEnd"><img src={Quatrieme} alt="" /></div>
                </>
            )
        } else if (spin && ring1 == undefined) {
            return (
                <>
                    <div className="ringMoving"><img src={Troisieme} alt="" /></div>
                    <div className="ringMoving"><img src={deuxieme} alt="" /></div>
                    <div className="ringMoving"><img src={Quatrieme} alt="" /></div>
                    <div className="ringMoving"><img src={Premier} alt="" /></div>
                </>
            )
        } else if (ring1 >= 1 && ring1 <= 50) {
            return (
                <>
                    <div className="ringEnd"><img src={Troisieme} alt="" /></div>
                    <div className="ringEnd"><img src={Premier} alt="" /></div>
                    <div className="ringEnd"><img src={Quatrieme} alt="" /></div>
                    <div className="ringEnd"><img src={deuxieme} alt="" /></div>
                </>
            )
        } else if (ring1 > 50 && ring1 <= 75) {
            return (
                <>
                    <div className="ringEnd"><img src={deuxieme} alt="" /></div>
                    <div className="ringEnd"><img src={Troisieme} alt="" /></div>
                    <div className="ringEnd"><img src={Premier} alt="" /></div>
                    <div className="ringEnd"><img src={Quatrieme} alt="" /></div>
                </>
            )
        } else if (ring1 > 75 && ring1 <= 95) {
            return (
                <>
                    <div className="ringEnd"><img src={Troisieme} alt="" /></div>
                    <div className="ringEnd"><img src={Quatrieme} alt="" /></div>
                    <div className="ringEnd"><img src={Premier} alt="" /></div>
                    <div className="ringEnd"><img src={deuxieme} alt="" /></div>
                </>
            )
        } else if (ring1 > 95 && ring1 <= 100) {
            return (
                <>
                    <div className="ringEnd"><img src={deuxieme} alt="" /></div>
                    <div className="ringEnd"><img src={Premier} alt="" /></div>
                    <div className="ringEnd"><img src={Troisieme} alt="" /></div>
                    <div className="ringEnd"><img src={Quatrieme} alt="" /></div>
                </>
            )
        }
    }

    function row2() {

        if (!spin) {
            return (
                <>
                    <div className="ringEnd"><img src={Quatrieme} alt="" /></div>
                    <div className="ringEnd"><img src={Premier} alt="" /></div>
                    <div className="ringEnd"><img src={deuxieme} alt="" /></div>
                    <div className="ringEnd"><img src={Troisieme} alt="" /></div>
                </>
            )
        } else if (spin && ring2 == undefined) {
            return (
                <>
                    <div className="ringMoving"><img src={Troisieme} alt="" /></div>
                    <div className="ringMoving"><img src={Quatrieme} alt="" /></div>
                    <div className="ringMoving"><img src={deuxieme} alt="" /></div>
                    <div className="ringMoving"><img src={Premier} alt="" /></div>
                </>
            )
        } else if (ring2 >= 1 && ring2 <= 50) {
            return (
                <>
                    <div className="ringEnd"><img src={Premier} alt="" /></div>
                    <div className="ringEnd"><img src={deuxieme} alt="" /></div>
                    <div className="ringEnd"><img src={Troisieme} alt="" /></div>
                    <div className="ringEnd"><img src={Quatrieme} alt="" /></div>
                </>
            )
        } else if (ring2 > 50 && ring2 <= 75) {
            return (
                <>
                    <div className="ringEnd"><img src={Premier} alt="" /></div>
                    <div className="ringEnd"><img src={deuxieme} alt="" /></div>
                    <div className="ringEnd"><img src={Quatrieme} alt="" /></div>
                    <div className="ringEnd"><img src={Troisieme} alt="" /></div>
                </>
            )
        } else if (ring2 > 75 && ring2 <= 95) {
            return (
                <>
                    <div className="ringEnd"><img src={Troisieme} alt="" /></div>
                    <div className="ringEnd"><img src={Premier} alt="" /></div>
                    <div className="ringEnd"><img src={deuxieme} alt="" /></div>
                    <div className="ringEnd"><img src={Quatrieme} alt="" /></div>
                </>
            )
        } else if (ring2 > 95 && ring2 <= 100) {
            return (
                <>
                    <div className="ringEnd"><img src={deuxieme} alt="" /></div>
                    <div className="ringEnd"><img src={Quatrieme} alt="" /></div>
                    <div className="ringEnd"><img src={Troisieme} alt="" /></div>
                    <div className="ringEnd"><img src={Premier} alt="" /></div>
                </>
            )
        }

    }



    function rand() {
        setRing1(Math.floor(Math.random() * (100 - 1) + 1))
        setTimeout(function () { setRing2(Math.floor(Math.random() * (100 - 1) + 1)) }, 1000)
    }
    function play() {

        setSpin(true)
        setRing1()
        setRing2()
        setTimeout(function () {
            rand()
        }, 2000)


    }



    return (
        <div className='contain_home'>


            <div className="slot">
                <div className="row">
                    {row1()}
                </div>
                <div className="row">
                    {row2()}
                </div>

            </div>

            <div className="button">
                <button onClick={() => play()}>Lancer</button>
            </div>

        </div>


    )
}

export default Home