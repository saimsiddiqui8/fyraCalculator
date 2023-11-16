import { Input, Select } from "antd";
import "./style.css";
import React, { useState } from "react";
import { Col, Dropdown, Row } from "react-bootstrap";
import countryOptions from "./country";
import { ToastContainer, toast } from 'react-toastify';
import emailjs from "emailjs-com";

const Calculator = () => {
    const [totalCost, setTotalCost] = useState(0);
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [personalDetails, setPersonalDetails] = useState({
        fullName: "",
        phoneNumber: "",
        email: "",
        country: "",
    });

    const isAllFieldsFilled = Object.values(personalDetails).every(value => value !== '');

    const [selectedItems, setSelectedItems] = useState({
        editing: "Editing",
        publishing: "Publishing",
        marketing: "Marketing",
        ISBN: "ISBN",

    });
    const [selectedItemsTwo, setSelectedItemsTwo] = useState({
        bookCover: "Book Cover",
        publishingFormat: "Publishing Format",

    });
    const handleInputChange = (selectedOption, fieldName) => {
        setPersonalDetails((prevDetails) => ({
            ...prevDetails,
            [fieldName]: selectedOption.value,
        }));
    };



    const handleSelect = (eventKey, dropdownName) => {
        setSelectedItems((prevSelectedItems) => ({
            ...prevSelectedItems,
            [dropdownName]: eventKey,
        }));
    };
    const handleSelectTwo = (eventKey, dropdownName) => {
        setSelectedItemsTwo((prevSelectedItems) => ({
            ...prevSelectedItems,
            [dropdownName]: eventKey,
        }));
    };

    const dropdownItems = {
        editing: [
            "Up to 10000 Words",
            "Up to 15000 Words",
            "Up to 20000 Words",
            "Up to 25000 Words",
            "More than 25000 Words",
        ],
        publishing: ["Amazon", "Multiple"],
        marketing: ["3 Months", "6 Months", "9 Months", "12 Months"],
        ISBN: ["1", "2", "3"],
    };
    const dropdownItemsTwo = {
        bookCover: ["Yes", "No"],
        publishingFormat: ["E-Book", "E-book/Paperback", "E-book/Paperback/Hardback"],
    };
    const notify = () => toast.success("Message sent!");
    const notifyError = () => toast.error("Error!");
    const sendEmail = (e) => {
        e.preventDefault();
        const formElement = e.target;
        emailjs.sendForm("service_wbavz6o", "template_3d33t1d", formElement, "8g8qKeeIlQgbYRH2u")
            .then(res => {
                const inputField = document.getElementById("lineForm");
                inputField.reset();
                notify();
            })
            .catch((error) => {
                notifyError();
                console.log(error);
            });
    };






    const calculateCost = (e) => {
        e.preventDefault();
        const costPerWord = 0.02;

        const editingOption = selectedItems.editing;

        const wordCountMapping = {
            "Up to 10000 Words": 10000,
            "Up to 15000 Words": 15000,
            "Up to 20000 Words": 20000,
            "Up to 25000 Words": 25000,
            "More than 25000 Words": 30000,
        };

        const baseCost = wordCountMapping[editingOption] * costPerWord;
        let additionalCost = 0;

        // Check publishing option
        if (selectedItems.publishing === "Amazon") {
            additionalCost += 400;
        } else if (selectedItems.publishing === "Multiple") {
            additionalCost += 1200;
        }

        // Check marketing option
        const marketingOption = parseInt(selectedItems.marketing, 10) || 0; // Convert to number
        const marketingCostPerMonth = 900;

        if (marketingOption) {
            additionalCost += marketingOption * marketingCostPerMonth;
        }

        // Check ISBN option
        const numberOfISBNs = parseInt(selectedItems.ISBN, 10) || 0;
        const costPerISBN = 125;
        additionalCost += numberOfISBNs * costPerISBN;

        // Check book cover option
        if (selectedItemsTwo.bookCover === "Yes") {
            additionalCost += 200;
        }

        // Check publishing format option
        const publishingFormat = selectedItemsTwo.publishingFormat;
        const publishingFormatCostMapping = {
            "E-Book": 150,
            "E-book/Paperback": 300,
            "E-book/Paperback/Hardback": 450,
        };

        additionalCost += publishingFormatCostMapping[publishingFormat] || 0;
        const calculatedCost = baseCost + additionalCost;
        if (isNaN(baseCost)) {
            alert("Please fill in the number of words!");
            return;
        }
        sendEmail(e);
        setTotalCost(calculatedCost);
    };

    const logFieldNames = () => {
        console.log("FullName:", personalDetails.fullName);
        console.log("PhoneNumber:", personalDetails.phoneNumber);
        console.log("Email:", personalDetails.email);
        console.log("Country:", personalDetails.country);
        console.log("Editing:", selectedItems.editing);
        console.log("Publishing:", selectedItems.publishing);
        console.log("Marketing:", selectedItems.marketing);
    };

    return (
        <section className="calcBg pb-5">
            <div className="container w-75 text-center py-5">
                <h2 id="calcHead">BOOK PUBLISHING COST CALCULATOR</h2>
                <h5 id="calcPara">WHAT YOU CAN EXPECT TO SPEND FOR WRITING,
                    PUBLISHING, AND PROMOTING YOUR BOOK</h5>
            </div>
            <>
                <div className="container w-75 pb-5 text-white">
                    <div className="my-4 pt-3">
                        <h4 id="personalDetails">Order Details:</h4>
                        <div id="hr"></div>
                    </div>
                    <Row className="text-center">
                        {Object.keys(selectedItems).map((dropdownName) => (
                            <Col lg={3} md={3} sm={12} key={dropdownName}>
                                <Dropdown
                                    className="text-center"
                                    onSelect={(eventKey) => handleSelect(eventKey, dropdownName)}
                                >
                                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                                        {selectedItems[dropdownName]}
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu className="bg-dark text-center">
                                        {dropdownItems[dropdownName].map((item, index) => (
                                            <Dropdown.Item
                                                key={index}
                                                eventKey={item}
                                                className="dropdownItem"
                                            >
                                                {item}
                                            </Dropdown.Item>
                                        ))}
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Col>
                        ))}
                    </Row>
                    <Row className="text-center mt-5">
                        {Object.keys(selectedItemsTwo).map((dropdownName) => (
                            <Col lg={6} md={6} sm={12} key={dropdownName}>
                                <Dropdown
                                    className="text-center"
                                    onSelect={(eventKey) => handleSelectTwo(eventKey, dropdownName)}
                                >
                                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                                        {selectedItemsTwo[dropdownName]}
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu className="bg-dark text-center">
                                        {dropdownItemsTwo[dropdownName].map((item, index) => (
                                            <Dropdown.Item
                                                key={index}
                                                eventKey={item}
                                                className="dropdownItem"
                                            >
                                                {item}
                                            </Dropdown.Item>
                                        ))}
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Col>
                        ))}
                    </Row>
                </div>
            </>

            <section>
                <div className="container w-75 pb-5 text-white">
                    <div className="mb-4">
                        <h4 id="personalDetails">Personal Details:</h4>
                        <div id="hr"></div>
                    </div>
                    <form onSubmit={calculateCost} id="lineForm" >
                        <Row>
                            <Col lg={6} md={6} sm={12}>
                                <label className="text-white mb-1">Your Name*</label>
                                <Input
                                    required
                                    name="from_name"
                                    onChange={(e) => handleInputChange(e, "fullName")}
                                    size="large"
                                    placeholder="Your Full Name"
                                    showCount maxLength={25} />
                            </Col>
                            <Col lg={6} md={6} sm={12}>
                                <label className="text-white mb-1">Phone No*</label>
                                <Input
                                    required
                                    onChange={(e) => handleInputChange(e, "phoneNumber")}
                                    name="phone_number"
                                    size="large"
                                    placeholder="Your Phone Number"
                                    type="number" maxLength={20} />
                            </Col>
                        </Row>
                        <Row className="mt-4">
                            <Col lg={6} md={6} sm={12}>
                                <label className="text-white mb-1">Your Email*</label>
                                <Input
                                    required
                                    type="email"
                                    name="email"
                                    onChange={(e) => handleInputChange(e, "email")}
                                    size="large"
                                    placeholder="someone@example.com" />
                            </Col>
                            <Col lg={6} md={6} sm={12}>
                                <label className="text-white mb-1">Country*</label> <br />
                                <Select
                                    size="large"
                                    className="w-100"
                                    name="country"
                                    options={countryOptions}
                                    onChange={(selectedOption) => handleInputChange(selectedOption, "country")}
                                />

                            </Col>
                        </Row>
                        <div className="text-center pt-3">
                            <button className="calSubmitBtn" disabled={!isAllFieldsFilled}>
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
                <div className="container w-50 pb-5">
                    <div className="my-4 pt-3">
                        <div className="d-flex flex-col">
                            <h4 id="personalDetails">Cost Estimation:</h4> &nbsp;
                            <h4 id="personalDetails" style={{ color: "red" }}>${totalCost}</h4>
                        </div>
                        <div id="hr"></div>
                    </div>
                </div>
            </section>
        </section>
    );
}

export default Calculator;
