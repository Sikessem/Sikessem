<x-dash-layout title="Dashboard">
    <div class="dashboard-grid">
      <div class="dashboard-card">
        <div class="card-header">
          <h3 class="card-title">Applications actives</h3>
          <span class="card-icon">🚀</span>
        </div>
        <div class="card-content">12</div>
        <div class="card-footer">
          <span class="trend-icon trend-up">▲</span>
          <span>+3 depuis hier</span>
        </div>
      </div>
      <div class="dashboard-card">
        <div class="card-header">
          <h3 class="card-title">Bases de données</h3>
          <span class="card-icon">🗄️</span>
        </div>
        <div class="card-content">8</div>
        <div class="card-footer">
          <span class="trend-icon trend-up">▲</span>
          <span>+1 cette semaine</span>
        </div>
      </div>
      <div class="dashboard-card">
        <div class="card-header">
          <h3 class="card-title">Utilisation CPU</h3>
          <span class="card-icon">💻</span>
        </div>
        <div class="card-content">67%</div>
        <div class="card-footer">
          <span class="trend-icon trend-down">▼</span>
          <span>-5% depuis hier</span>
        </div>
      </div>
      <div class="dashboard-card">
        <div class="card-header">
          <h3 class="card-title">Utilisation mémoire</h3>
          <span class="card-icon">🧠</span>
        </div>
        <div class="card-content">4.2 GB</div>
        <div class="card-footer">
          <span class="trend-icon trend-up">▲</span>
          <span>+0.5 GB depuis hier</span>
        </div>
      </div>
    </div>

    <div class="dashboard-card" style="margin-top: 30px;">
      <div class="card-header">
        <h3 class="card-title">Performances des applications</h3>
      </div>
      <div class="chart-container" id="performanceChart"></div>
    </div>
</x-dash-layout>
