"use client";

import { CalculatorState } from "./treatment-calculator";
import { cn } from "@/lib/utils";

interface CalculatorInputsProps {
  state: CalculatorState;
  setState: (state: CalculatorState) => void;
}

export function CalculatorInputs({ state, setState }: CalculatorInputsProps) {
  const goals = [
    { id: "straighter", label: "Daha düzgün dişler" },
    { id: "replace", label: "Eksik diş değiştirme" },
    { id: "whiten", label: "Gülüş beyazlatma" },
    { id: "makeover", label: "Tam yenileme" },
  ];

  const methods = [
    { id: "aligners", label: "Şeffaf Plaklar" },
    { id: "veneers", label: "Veneer" },
    { id: "implants", label: "İmplant" },
  ];

  return (
    <div className="space-y-6">
      {/* 01. Select goals */}
      <div className="bg-green-50 rounded-xl p-6 border border-green-100">
        <h3 className="text-sm font-semibold text-green-900 mb-4">
          01. Hedef seçin
        </h3>
        <div className="space-y-3">
          {goals.map((goal) => (
            <label
              key={goal.id}
              className="flex items-center cursor-pointer group"
            >
              <input
                type="radio"
                name="goal"
                value={goal.id}
                checked={state.goal === goal.id}
                onChange={(e) => setState({ ...state, goal: e.target.value })}
                className="w-5 h-5 text-green-600 border-green-300 focus:ring-green-500 focus:ring-2"
              />
              <span className="ml-3 text-sm text-gray-700 group-hover:text-green-900">
                {goal.label}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* 02. Preferred method */}
      <div className="bg-green-50 rounded-xl p-6 border border-green-100">
        <h3 className="text-sm font-semibold text-green-900 mb-4">
          02. Tercih edilen yöntem
        </h3>
        <div className="flex flex-wrap gap-3">
          {methods.map((method) => (
            <button
              key={method.id}
              onClick={() => setState({ ...state, method: method.id })}
              className={cn(
                "px-4 py-2 rounded-lg text-sm font-medium transition-all",
                state.method === method.id
                  ? "bg-green-600 text-white shadow-md"
                  : "bg-green-200 text-green-800 hover:bg-green-300"
              )}
            >
              {method.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

