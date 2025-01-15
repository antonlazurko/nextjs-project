'use client';

import { useState } from "react";

import Button from "@/app/components/button";
import dynamic from "next/dynamic";

const CompanyFormModal = dynamic(() => import("@/app/components/company-form-modal"), { ssr: false });

export default function AddCompanyButton() {
    const [show, setShow] = useState(false);
    return (
        <>
            <Button onClick={() => setShow(true)} >
                Add Company
            </Button>
            <CompanyFormModal
                onSubmit={() => {}}
                show={show}
                onClose={() => setShow(false)}
            />
        </>
    )
}