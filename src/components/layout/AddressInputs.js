import React from "react";

export default function AddressInputs({ addressProps, setAddressProp }) {
  return (
    <div>
      <label>
        Phone:
        <input
          type="text"
          value={addressProps.phone || ""}
          onChange={(e) => setAddressProp("phone", e.target.value)}
        />
      </label>
      <label>
        Street Address:
        <input
          type="text"
          value={addressProps.streetAddress || ""}
          onChange={(e) => setAddressProp("streetAddress", e.target.value)}
        />
      </label>
      <label>
        City:
        <input
          type="text"
          value={addressProps.city || ""}
          onChange={(e) => setAddressProp("city", e.target.value)}
        />
      </label>
      <label>
        Postal Code:
        <input
          type="text"
          value={addressProps.postalCode || ""}
          onChange={(e) => setAddressProp("postalCode", e.target.value)}
        />
      </label>
      <label>
        Country:
        <input
          type="text"
          value={addressProps.country || ""}
          onChange={(e) => setAddressProp("country", e.target.value)}
        />
      </label>
    </div>
  );
}
