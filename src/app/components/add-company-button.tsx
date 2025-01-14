'use client';

import { useState } from "react";

import Button from "@/app/components/button";
import dynamic from "next/dynamic";
// import CompanyFormModal from "@/components/company-form-modal";

const CompanyFormModal = dynamic(() => import("@/app/components/company-form-modal"), { ssr: false });

export default function AddCompanyButton() {
    const [show, setShow] = useState(false);
    return (
        <>
            <Button onClick={() => setShow(true)} >
                Add Company
            </Button>
            <CompanyFormModal
                onSubmit={() => console.log('test')}
                show={show}
                onClose={() => setShow(false)}
            />
        </>
    )
}