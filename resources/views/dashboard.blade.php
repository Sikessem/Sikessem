<x-dash-layout title="Dashboard">
    <x-dashboard-grid>
        <x-dashboard-card title="Applications actives" icon="🚀">
            12
            <x-slot:footer>
                <span class="trend-icon trend-up">▲</span>
                <span>+3 depuis hier</span>
            </x-slot:footer>
        </x-dashboard-card>
        <x-dashboard-card title="Bases de données" icon="🗄️">
            8
            <x-slot:footer>
                <span class="trend-icon trend-up">▲</span>
                <span>+1 cette semaine</span>
            </x-slot:footer>
        </x-dashboard-card>
        <x-dashboard-card title="Utilisation CPU" icon="💻">
            67%
            <x-slot:footer>
                <span class="trend-icon trend-down">▼</span>
                <span>-5% depuis hier</span>
            </x-slot:footer>
        </x-dashboard-card>
        <x-dashboard-card title="Utilisation mémoire" icon="🧠">
            4.2 GB
            <x-slot:footer>
                <span class="trend-icon trend-up">▲</span>
                <span>+0.5 GB depuis hier</span>
            </x-slot:footer>
        </x-dashboard-card>
    </x-dashboard-grid>

    <x-dashboard-card title="Performances des applications" style="margin-top: 30px;">
      <div class="chart-container" id="performanceChart"></div>
    </x-dashboard-card>
</x-dash-layout>
