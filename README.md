# FogScheduler
# IoT - Fog - Cloud Metaheuristic Task Scheduling Dashboard

This repository contains the source code for the IoT, Fog, and Cloud Task Scheduling Dashboard. It is a React-based application designed to simulate, visualize, and benchmark metaheuristic optimization scheduling algorithms in a heterogeneous IoT-Fog-Cloud computing environment.

## Project Overview

Task scheduling in IoT-Fog-Cloud computing is a multi-objective optimization problem. This project provides an interactive simulation interface to benchmark and compare various metaheuristic scheduling algorithms:

1. Particle Swarm Optimization (PSO): Velocity-based swarm model.
2. Grey Wolf Optimizer (GWO): Simulates the alpha-beta-delta leadership hierarchy of grey wolves.
3. Whale Optimization Algorithm (WOA): Inspired by the bubble-net hunting behavior of humpback whales.
4. Ant Colony Optimization (ACO): Based on pheromone trail paths.
5. Genetic Algorithm (GA): Simulates crossover and mutation operations.
6. PSO-GWO Hybrid: A hybrid metaheuristic algorithm incorporating Levy flight perturbations.

The dashboard displays real-time performance indicators, algorithm convergence, Pareto fronts, architectural topology mappings, active fog node statuses, and scheduler event logs.

## Core Features

- Interactive Benchmark Cards: Click on different algorithms to inspect their optimization metrics (latency, energy consumption, and QoS) and dynamically update the radar chart.
- Key Performance Indicators (KPIs): Live trackers displaying Average Latency, Total Energy saved (kJ), QoS Rate (deadline met percentage), and Load Balance factor.
- Convergence and Pareto Front Visualization:
  - Convergence Curves: Plots optimization iteration against fitness to show how quickly each algorithm converges.
  - Pareto Front Scatter Plot: Visualizes the latency versus energy tradeoff, where the bottom-left region represents the optimal multi-objective balance.
- Architecture Topology Map: An interactive SVG diagram depicting the data flow from the IoT Layer (sensors, actuators) through the Fog Layer (distributed nodes) to the Cloud Data Center, coordinated by the Metaheuristic Task (MHOT) Scheduler.
- Fog Node Status Tracker: Monitor CPU loads, active tasks, and status (active, busy) across multiple distributed fog nodes.
- Real-Time Scheduler Event Log: A live console stream logging task dispatches, migrations, warning alerts, and optimization milestones.

## Codebase Architecture

The project is structured as a standard React application. Below is an overview of the file structure:

- src/App.jsx: Main entry file that defines the grid layout and manages the state for the selected algorithm.
- src/Header.jsx: Global header containing the dashboard title, real-time clock, status indicators, and current active algorithm.
- src/KpiRow.jsx: Tracks and updates core performance metrics with simulated variations over time.
- src/ChartRow.jsx: Renders the convergence line chart and the latency-vs-energy Pareto front scatter plot.
- src/ArchTopology.jsx: An SVG-based representation of the IoT-Fog-Cloud infrastructure layers.
- src/AlgoCards.jsx: Renders selection cards for each of the metaheuristic scheduling algorithms and displays their respective objective scores.
- src/RadarChart.jsx: Renders a radar chart showing how a selected algorithm ranks across Latency, Energy, QoS, Makespan, and Load Balancing relative to a baseline.
- src/NodeTable.jsx: Tracks CPU utilization and task loads on the edge/fog computing nodes.
- src/EventLog.jsx: Simulates live scheduling logs using a rolling buffer.
- src/data/algoData.js: Static dataset defining algorithm scores, initial node states, color schemes, and logged event definitions.

## Technical Details

- Language: JavaScript (React 18)
- Styling: Vanilla Inline CSS and CSS components for maximum portability, rendering speed, and custom control.
- Graphics: Custom vector SVGs (scalable vector graphics) for the radar chart, line charts, scatter plots, and system topology maps.
- Build Tool: react-scripts (Create React App environment)

## Getting Started

Follow these steps to run the application locally:

### Prerequisites

- Node.js (v16.x or newer is recommended)
- npm (Node Package Manager)

### Installation

1. Clone this repository to your local machine.
2. Open a terminal in the root directory of the project.
3. Install the dependencies:
   npm install

### Running the Application

To start the local development server:
   npm start

### Building for Production

To build a minimized, production-ready bundle:
   npm run build

The built assets will be generated in the build directory.
