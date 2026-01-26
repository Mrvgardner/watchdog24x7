'use client';

import { useEffect, useRef, useState } from 'react';
import Chart from 'chart.js/auto';

export default function ATMFraudChart() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const chartRef = useRef<Chart | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Intersection Observer for animation on scroll
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.5 }
    );

    if (canvasRef.current) {
      observer.observe(canvasRef.current);
    }

    return () => {
      if (canvasRef.current) {
        observer.unobserve(canvasRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible || !canvasRef.current) return;

    if (chartRef.current) {
      chartRef.current.destroy();
    }

    const ctx = canvasRef.current.getContext('2d');
    if (!ctx) return;

    chartRef.current = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: [
          'Card Skimming',
          'Malware Attacks',
          'Physical Tampering',
          'Transaction Fraud',
          'Unauthorized Access'
        ],
        datasets: [
          {
            data: [28, 22, 18, 20, 12],
            backgroundColor: [
              '#ff4f00',
              '#0066cc',
              '#ff7f33',
              '#002b5e',
              '#ffaa33'
            ],
            borderColor: '#ffffff',
            borderWidth: 2
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
          legend: {
            position: 'bottom',
            labels: {
              font: {
                size: 14,
                weight: 500
              },
              color: '#374151',
              padding: 20
            }
          }
        }
      }
    });

    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, [isVisible]);

  return (
    <div className="w-full max-w-md">
      <canvas
        ref={canvasRef}
        style={{ maxWidth: '100%', height: 'auto' }}
      />
    </div>
  );
}
