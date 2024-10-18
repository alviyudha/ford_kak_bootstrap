/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import DesignComp from './DesignComp';
import PerformanceComp from './PerformanceComp';
import SafetyComp from './SafetyComp';
import TechComp from './TechComp';

export default function TabCarsDetail({ dataminispec }) {
  const { design, performance, safety, technology } = dataminispec;
 console.log("ini design",design)
  return (
    <>
      <nav className="mt-5 shadow p-3" id="tabModelsDetail">
        <div className="nav nav-underline justify-content-center " id="nav-tab-cars" role="tablist">
          <button
            className="nav-link nav-link-sec px-4 active"
            id="Design-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-Design"
            type="button"
            role="tab"
            aria-controls="nav-Design"
            aria-selected="true"
          >
            Design
          </button>
          <button
            className="nav-link nav-link-sec px-4"
            id="Performance-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-Performance"
            type="button"
            role="tab"
            aria-controls="nav-Performance"
            aria-selected="false"
          >
            Performance
          </button>
          <button
            className="nav-link nav-link-sec px-4"
            id="Technology-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-Technology"
            type="button"
            role="tab"
            aria-controls="nav-Technology"
            aria-selected="false"
          >
            Technology
          </button>
          <button
            className="nav-link nav-link-sec px-4"
            id="Safety-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-Safety"
            type="button"
            role="tab"
            aria-controls="nav-Safety"
            aria-selected="false"
          >
            Safety
          </button>
        </div>
      </nav>

      <div className="tab-content mt-5" id="nav-tabContent">
        {/* Design Tab Content */}
        <div className="tab-pane fade show active" id="nav-Design" role="tabpanel" aria-labelledby="Design-tab">
          <DesignComp designDataProps={design} />
        </div>
        <div className="tab-pane fade" id="nav-Performance" role="tabpanel" aria-labelledby="Performance-tab">
          <PerformanceComp performanceProps={performance} />
        </div>
        <div className="tab-pane fade" id="nav-Technology" role="tabpanel" aria-labelledby="Technology-tab">
          <TechComp techProps={technology} />
        </div>
        <div className="tab-pane fade" id="nav-Safety" role="tabpanel" aria-labelledby="Safety-tab">
          <SafetyComp safetyProps={safety} />
        </div>
      </div>
    </>
  );
}
