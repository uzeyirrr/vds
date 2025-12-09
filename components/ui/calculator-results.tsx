"use client";

import { CalculatorState } from "./treatment-calculator";
import { Check } from "lucide-react";
import { useMemo } from "react";

interface CalculatorResultsProps {
  state: CalculatorState;
}

interface TreatmentPricing {
  perTooth: { min: number; max: number };
  baseCost: number;
  complexity: number;
  timeWeeks: number;
  plan: string[];
}

const pricingData: Record<string, Record<string, TreatmentPricing>> = {
  aligners: {
    straighter: {
      perTooth: { min: 200, max: 400 },
      baseCost: 500,
      complexity: 45,
      timeWeeks: 8,
      plan: ["Şeffaf plaklar", "Düzenli kontroller", "Sonuç garantisi"],
    },
    replace: {
      perTooth: { min: 250, max: 450 },
      baseCost: 600,
      complexity: 55,
      timeWeeks: 10,
      plan: ["Şeffaf plaklar", "Eksik diş analizi", "Özel planlama"],
    },
    whiten: {
      perTooth: { min: 150, max: 300 },
      baseCost: 400,
      complexity: 35,
      timeWeeks: 6,
      plan: ["Beyazlatma plakları", "Kontrollü süreç", "Bakım rehberi"],
    },
    makeover: {
      perTooth: { min: 300, max: 500 },
      baseCost: 800,
      complexity: 70,
      timeWeeks: 12,
      plan: ["Kapsamlı plak seti", "3D planlama", "Tam yenileme paketi"],
    },
  },
  veneers: {
    straighter: {
      perTooth: { min: 800, max: 1200 },
      baseCost: 1000,
      complexity: 60,
      timeWeeks: 4,
      plan: ["Veneer uygulaması", "Estetik tasarım", "Kalıcı sonuç"],
    },
    replace: {
      perTooth: { min: 900, max: 1300 },
      baseCost: 1200,
      complexity: 65,
      timeWeeks: 5,
      plan: ["Veneer uygulaması", "Eksik diş çözümü", "Doğal görünüm"],
    },
    whiten: {
      perTooth: { min: 700, max: 1100 },
      baseCost: 900,
      complexity: 50,
      timeWeeks: 3,
      plan: ["Beyaz veneer", "Hızlı sonuç", "Estetik iyileştirme"],
    },
    makeover: {
      perTooth: { min: 1000, max: 1500 },
      baseCost: 1500,
      complexity: 75,
      timeWeeks: 6,
      plan: ["Tam ağız veneer", "3D tasarım", "Premium sonuç"],
    },
  },
  implants: {
    straighter: {
      perTooth: { min: 1500, max: 2500 },
      baseCost: 2000,
      complexity: 70,
      timeWeeks: 16,
      plan: ["İmplant cerrahisi", "Kemik analizi", "Özel kronlar"],
    },
    replace: {
      perTooth: { min: 1600, max: 2800 },
      baseCost: 2200,
      complexity: 80,
      timeWeeks: 20,
      plan: ["3D rehberli implant", "Eksik diş çözümü", "Kalıcı sonuç"],
    },
    whiten: {
      perTooth: { min: 1400, max: 2400 },
      baseCost: 1800,
      complexity: 65,
      timeWeeks: 14,
      plan: ["İmplant uygulaması", "Estetik kronlar", "Doğal görünüm"],
    },
    makeover: {
      perTooth: { min: 1800, max: 3000 },
      baseCost: 3000,
      complexity: 85,
      timeWeeks: 24,
      plan: ["Tam ağız implant", "3D planlama", "Premium çözüm"],
    },
  },
};

export function CalculatorResults({ state }: CalculatorResultsProps) {
  const selectedTeethCount = state.selectedTeeth.includes("all") 
    ? 32 
    : state.selectedTeeth.filter((t) => t !== "all").length || 1;
  
  const calculations = useMemo(() => {
    if (!state.method || !state.goal) {
      return {
        complexity: 0,
        treatmentTime: 0,
        costMin: 0,
        costMax: 0,
        plan: [],
      };
    }

    const pricing = pricingData[state.method]?.[state.goal];
    if (!pricing) {
      return {
        complexity: 0,
        treatmentTime: 0,
        costMin: 0,
        costMax: 0,
        plan: [],
      };
    }

    const costMin = pricing.baseCost + pricing.perTooth.min * selectedTeethCount;
    const costMax = pricing.baseCost + pricing.perTooth.max * selectedTeethCount;

    return {
      complexity: pricing.complexity,
      treatmentTime: pricing.timeWeeks,
      costMin,
      costMax,
      plan: pricing.plan,
    };
  }, [state.method, state.goal, selectedTeethCount]);

  const costRange = 25000;

  const maxWeeks = 24;
  const weeksBars = Math.ceil((calculations.treatmentTime / maxWeeks) * 5);

  if (!state.method || !state.goal) {
    return (
      <div className="space-y-4">
        <h3 className="text-sm font-semibold text-green-900 mb-3">Sonuç</h3>
        <div className="bg-green-50 rounded-xl p-6 border border-green-100 text-center">
          <p className="text-sm text-gray-600">
            Lütfen hedef ve yöntem seçin
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <h3 className="text-sm font-semibold text-green-900 mb-3">Sonuç</h3>

      {/* Treatment Complexity & Time - Combined */}
      <div className="bg-green-900 rounded-xl p-4 text-white">
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <h4 className="text-xs font-medium mb-2 text-green-100">
              Karmaşıklık
            </h4>
            <div className="relative w-full h-20">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 200 100">
                <circle
                  cx="100"
                  cy="100"
                  r="60"
                  fill="none"
                  stroke="rgba(255,255,255,0.2)"
                  strokeWidth="8"
                />
                <circle
                  cx="100"
                  cy="100"
                  r="60"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="8"
                  strokeDasharray={`${(calculations.complexity / 100) * 188.4} 188.4`}
                  strokeLinecap="round"
                  className="text-green-400"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-xl font-bold">{calculations.complexity}%</span>
              </div>
            </div>
          </div>
          <div>
            <h4 className="text-xs font-medium mb-2 text-green-100">
              Süre
            </h4>
            <div className="flex gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className={`flex-1 h-6 rounded ${
                    i < weeksBars ? "bg-green-500" : "bg-green-800"
                  }`}
                />
              ))}
            </div>
            <p className="text-lg font-bold">{calculations.treatmentTime} hafta</p>
          </div>
        </div>
        <p className="text-[10px] text-green-300 text-center">Sadece tahmin</p>
      </div>

      {/* Recommended Plan - Compact */}
      <div className="bg-green-900 rounded-xl p-4 text-white">
        <h4 className="text-xs font-medium mb-3 text-green-100">
          Önerilen plan
        </h4>
        <ul className="space-y-1.5">
          {calculations.plan.map((item, index) => (
            <li key={index} className="flex items-start gap-2">
            <Check className="w-3 h-3 text-green-400 mt-0.5 shrink-0" />
              <span className="text-xs leading-relaxed">{item}</span>
          </li>
          ))}
        </ul>
      </div>

      {/* Estimated Cost Range - Compact */}
      <div className="bg-green-900 rounded-xl p-4 text-white">
        <h4 className="text-xs font-medium mb-3 text-green-100">
          Tahmini maliyet
        </h4>
        <div className="mb-2">
          <p className="text-[10px] text-green-300 mb-1">
            Seçilen diş sayısı: {selectedTeethCount}
          </p>
        </div>
        <div className="relative w-full h-3 bg-green-800 rounded-full mb-2">
          <div
            className="absolute left-0 top-0 h-full bg-green-500 rounded-full transition-all duration-300"
            style={{ width: `${Math.min((calculations.costMax / costRange) * 100, 100)}%` }}
          />
        </div>
        <div className="flex justify-between text-[10px] text-green-300 mb-2">
          <span>$500</span>
          <span>$25,000</span>
        </div>
        <p className="text-xl font-bold mb-1">
          ${calculations.costMin.toLocaleString()} - ${calculations.costMax.toLocaleString()}*
        </p>
        <p className="text-[10px] text-green-300 leading-tight">
          *Sadece tahmin. Nihai maliyet klinikte belirlenir.
        </p>
      </div>
    </div>
  );
}

