
"use client";

import { useState } from "react";
import { getRandomStatus } from "@/lib/transaction";

export default function CheckPage() {
  const [trxId, setTrxId] = useState("");
  const [status, setStatus] = useState("");

  function handleCheck() {
    if (!trxId) return;
    setStatus(getRandomStatus());
  }

  return (
    <main className="section">
      <div className="container">
        <h1 className="section-title">Cek Status Transaksi</h1>
        <div className="card" style={{ maxWidth: 520 }}>
          <div className="field">
            <label>ID Transaksi</label>
            <input
              className="input"
              value={trxId}
              onChange={(e) => setTrxId(e.target.value)}
              placeholder="Contoh: TRX-ABCDEFGH"
            />
          </div>
          <button className="button" onClick={handleCheck}>Cek Sekarang</button>

          {status && (
            <div style={{ marginTop: 16 }}>
              <p>Status transaksi:</p>
              <span className={`status ${status}`}>{status}</span>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
