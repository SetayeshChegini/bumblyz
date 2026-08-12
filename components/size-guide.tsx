"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

const sizes = [
  ["S", "58", "64", "61"],
  ["M", "61", "66", "62"],
  ["L", "64", "68", "63"],
  ["XL", "67", "70", "64"],
];

export function SizeGuide({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.button className="drawer-backdrop" aria-label="Close size guide" onClick={onClose} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} />
          <motion.div className="size-modal" role="dialog" aria-modal="true" aria-labelledby="size-guide-title" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 20 }}>
            <div className="drawer-head"><span id="size-guide-title">SIZE GUIDE / CM</span><button type="button" onClick={onClose} aria-label="Close size guide"><X /></button></div>
            <p>Measurements are taken flat. Compare them against a hoodie you already own.</p>
            <div className="size-table" role="table" aria-label="Hoodie measurements in centimetres">
              <div role="row"><b role="columnheader">SIZE</b><b role="columnheader">CHEST</b><b role="columnheader">LENGTH</b><b role="columnheader">SLEEVE</b></div>
              {sizes.map((row) => <div role="row" key={row[0]}>{row.map((cell, index) => <span role="cell" key={cell}>{index === 0 ? <strong>{cell}</strong> : cell}</span>)}</div>)}
            </div>
            <small>Between sizes? Choose your usual size for the intended oversized fit.</small>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
