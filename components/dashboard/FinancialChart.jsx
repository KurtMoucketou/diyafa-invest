import { LineChart, Line, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { useQuery } from '@tanstack/react-query';

const mockData = [
  { month: 'Jan', revenus: 45000, occupation: 78 },
  { month: 'Fév', revenus: 52000, occupation: 82 },
  { month: 'Mar', revenus: 48000, occupation: 80 },
  { month: 'Avr', revenus: 61000, occupation: 88 },
  { month: 'Mai', revenus: 58000, occupation: 85 },
  { month: 'Juin', revenus: 72000, occupation: 92 },
];

export default function FinancialChart() {
  return (
    <div className="glass-effect p-4 sm:p-6">
      <h3 className="text-gold text-lg sm:text-xl mb-4">Performance financière</h3>
      <div className="h-64 sm:h-80 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={mockData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#333" />
            <XAxis dataKey="month" stroke="#888" />
            <YAxis yAxisId="left" stroke="#888" />
            <YAxis yAxisId="right" orientation="right" stroke="#D4AF37" />
            <Tooltip 
              contentStyle={{ backgroundColor: '#1E1E1E', border: '1px solid #D4AF37' }}
              labelStyle={{ color: '#D4AF37' }}
            />
            <Area 
              type="monotone" 
              dataKey="revenus" 
              stroke="#D4AF37" 
              fill="#D4AF37" 
              fillOpacity={0.1}
              yAxisId="left"
              name="Revenus (MAD)"
            />
            <Line 
              type="monotone" 
              dataKey="occupation" 
              stroke="#00B4D8" 
              strokeWidth={2}
              yAxisId="right"
              name="Taux d'occupation (%)"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}