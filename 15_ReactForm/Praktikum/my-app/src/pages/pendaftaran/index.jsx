import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import { useState } from "react";
import { useRef } from "react";

export default function Register() {
    const dataKosong = {
        namaLengkap: "",
        email: "",
        noHanphone: 0,
        kelas: "",
        harapan: "",
        it: "",
        nonIt: "",
    };

    const [data, setData] = useState({ dataKosong });
    const fullNameRegex = /^[a-zA-Z\s]*$/;
    const emailRegex = /^$|^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    const phoneNumberRegex = /^$|\d+$/;
    const [msgErr, setMsgErr] = useState();
    const [msgErrEmail, setMsgErrEmail] = useState();
    const [msgErrNoHp, setMsgErrNoHp] = useState();
    const suratKesungguhan = useRef(null);
    const HandleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setData({ ...data, [name]: value });

        if (name === "namaLengkap") {
            if (fullNameRegex.test(value)) {
                setMsgErr("");
            } else {
                setMsgErr("Nama Lengkap Harus Berupa Huruf");
            }
        }

        if (name === "email") {
            if (emailRegex.test(value)) {
                setMsgErrEmail("");
            } else {
                setMsgErrEmail("Email Tidak Sesuai");
            }
        }

        if (name === "noHandphone") {
            if (phoneNumberRegex.test(value)) {
                setMsgErrNoHp("");
            } else {
                setMsgErrNoHp("No HP Tidak Sesuai");
            }
        }

        console.log(data);
    };

    const HandleSubmit = () => {
        if (msgErr !== "" || msgErrEmail !== "" || msgErrEmail !== "") {
            alert("Data Pendaftar Tidak Sesuai");
        } else {
            alert("Data Pendaftar " + data.namaLengkap + " Berhasil diterima");
        }
    };
    return (
        <>
            <div className='container'>
                <div className='row d-flex align-items-center justify-content-center'>
                    <h2 className='mt-3 text-center'>
                        Pendaftaran Peserta Coding Bootcamp
                    </h2>
                    <Card style={{ width: "100%" }}>
                        <Card.Body>
                            <Form onSubmit={HandleSubmit}>
                                <FloatingLabel
                                    controlId='floatingInput'
                                    label='Nama Lengkap'
                                    className='mb-3 mt-3'
                                >
                                    <Form.Control
                                        type='text'
                                        name='namaLengkap'
                                        onChange={HandleInput}
                                        value={data.namaLengkap}
                                        placeholder='Tuliskan Nama Anda'
                                    />
                                    <span className='text-danger pt-2'>
                                        {msgErr}
                                    </span>
                                </FloatingLabel>

                                <FloatingLabel
                                    controlId='floatingInput'
                                    label='Email'
                                    className='mb-3'
                                >
                                    <Form.Control
                                        type='email'
                                        name='email'
                                        onChange={HandleInput}
                                        value={data.email}
                                        placeholder='Tuliskan Email Anda'
                                    />
                                    <span className='text-danger pt-2'>
                                        {msgErrEmail}
                                    </span>
                                </FloatingLabel>
                                <FloatingLabel
                                    controlId='floatingInput'
                                    label='No Handphone'
                                    className='mb-3'
                                >
                                    <Form.Control
                                        type='text'
                                        name='noHandphone'
                                        onChange={HandleInput}
                                        value={data.noHanphone}
                                        placeholder='Tuliskan No HP Anda'
                                    />
                                    <span className='text-danger pt-2'>
                                        {msgErrNoHp}
                                    </span>
                                </FloatingLabel>
                                <div className='d-flex flex-column text-start'>
                                    <label>Latar Belakang Pendidikan</label>
                                    <div className='mt-2'>
                                        {["radio"].map((type) => (
                                            <div
                                                key={`inline-${type}`}
                                                className='mb-3'
                                            >
                                                <Form.Check
                                                    inline
                                                    label='IT'
                                                    name='group1'
                                                    onChange={HandleInput}
                                                    value={data.it}
                                                    type={type}
                                                    id={`inline-${type}-1`}
                                                />
                                                <Form.Check
                                                    inline
                                                    label='NonIT'
                                                    name='group1'
                                                    onChange={HandleInput}
                                                    value={data.nonIt}
                                                    type={type}
                                                    id={`inline-${type}-2`}
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className='text-start mt-3'>
                                    <label> Kelas Coding Yang dipilih </label>
                                    <Form.Select
                                        aria-label='Default select example'
                                        className='mt-2'
                                        name='kelas'
                                        onChange={HandleInput}
                                        value={data.kelas}
                                    >
                                        <option>Pilih Kelas Anda</option>
                                        <option value='1'>
                                            FrontEnd - React
                                        </option>
                                        <option value='2'>
                                            BackEnd - Golang
                                        </option>
                                    </Form.Select>
                                </div>
                                <Form.Group
                                    controlId='formFile'
                                    className='mb-3 mt-3'
                                >
                                    <Form.Label>
                                        Foto Surat Kesungguhan
                                    </Form.Label>
                                    <Form.Control
                                        type='file'
                                        ref={suratKesungguhan}
                                        name='suratKesungguhan'
                                    />
                                </Form.Group>
                                <FloatingLabel
                                    controlId='floatingTextarea2'
                                    label='Harapan Untuk Coding Bootcamp Ini'
                                >
                                    <Form.Control
                                        as='textarea'
                                        onChange={HandleInput}
                                        value={data.harapan}
                                        placeholder='Harapan Untuk Coding Bootcamp Ini'
                                        style={{ height: "150px" }}
                                        name='harapan'
                                    />
                                </FloatingLabel>
                                <div className='mt-3 d-flex gap-2'>
                                    <Button
                                        className='btn-success'
                                        type='submit'
                                    >
                                        Submit
                                    </Button>
                                    <Button className='btn-danger' type='reset'>
                                        Reset
                                    </Button>
                                </div>
                            </Form>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </>
    );
}
