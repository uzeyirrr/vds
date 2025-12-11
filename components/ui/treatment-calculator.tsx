"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CalculatorHeader } from "./calculator-header";
import { CalculatorInputs } from "./calculator-inputs";
import { Calculator3DModel } from "./calculator-3d-model";
import { CalculatorResults } from "./calculator-results";

export interface CalculatorState {
  goal: string;
  method: string;
  selectedTeeth: string[];
}

export function TreatmentCalculator() {
  const [state, setState] = useState<CalculatorState>({
    goal: "",
    method: "",
    selectedTeeth: [],
  });

  return (
    <section className="w-full bg-gray-50 py-16 md:py-24 px-4 md:px-6 lg:px-8 border-t border-gray-200">
      <div className="container mx-auto max-w-7xl">
        <CalculatorHeader />
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-12">
          {/* Sol Kolon - Inputs */}
          <div className="lg:col-span-4 space-y-6">
            <CalculatorInputs state={state} setState={setState} />
          </div>

          {/* Orta Bölüm - 3D Model */}
          <div className="lg:col-span-4">
            <Calculator3DModel 
              selectedTeeth={state.selectedTeeth}
              onToothSelect={(teeth) => setState({ ...state, selectedTeeth: teeth })}
            />
          </div>

          {/* Sağ Kolon - Results */}
          <div className="lg:col-span-4">
            <CalculatorResults state={state} />
          </div>
        </div>
      </div>
    </section>
  );
}

