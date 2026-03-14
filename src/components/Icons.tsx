const iconClass = "w-full h-full";

export function MarketingIcon({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="marketing-grad" x1="0" y1="0" x2="48" y2="48">
          <stop offset="0%" stopColor="#6366f1" />
          <stop offset="100%" stopColor="#a855f7" />
        </linearGradient>
      </defs>
      <rect x="4" y="10" width="40" height="28" rx="4" stroke="url(#marketing-grad)" strokeWidth="2.5" fill="none" />
      <path d="M12 30 L18 22 L24 26 L30 16 L36 20" stroke="url(#marketing-grad)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <circle cx="36" cy="20" r="2.5" fill="#a855f7" />
      <path d="M36 14 L36 10" stroke="#a855f7" strokeWidth="2" strokeLinecap="round" />
      <path d="M40 16 L36 14" stroke="#a855f7" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function LegalIcon({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="legal-grad" x1="0" y1="0" x2="48" y2="48">
          <stop offset="0%" stopColor="#06b6d4" />
          <stop offset="100%" stopColor="#6366f1" />
        </linearGradient>
      </defs>
      <path d="M24 6 L24 42" stroke="url(#legal-grad)" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M16 42 L32 42" stroke="url(#legal-grad)" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M12 16 L24 10 L36 16" stroke="url(#legal-grad)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M12 16 L8 28" stroke="url(#legal-grad)" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M36 16 L40 28" stroke="url(#legal-grad)" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M4 28 Q8 34 12 28" stroke="url(#legal-grad)" strokeWidth="2.5" fill="none" />
      <path d="M36 28 Q40 34 44 28" stroke="url(#legal-grad)" strokeWidth="2.5" fill="none" />
    </svg>
  );
}

export function InventoryIcon({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="inventory-grad" x1="0" y1="0" x2="48" y2="48">
          <stop offset="0%" stopColor="#f59e0b" />
          <stop offset="100%" stopColor="#ef4444" />
        </linearGradient>
      </defs>
      <path d="M6 14 L24 6 L42 14 L42 34 L24 42 L6 34 Z" stroke="url(#inventory-grad)" strokeWidth="2.5" strokeLinejoin="round" fill="none" />
      <path d="M6 14 L24 22 L42 14" stroke="url(#inventory-grad)" strokeWidth="2.5" strokeLinejoin="round" fill="none" />
      <path d="M24 22 L24 42" stroke="url(#inventory-grad)" strokeWidth="2.5" />
      <path d="M15 10 L33 18" stroke="url(#inventory-grad)" strokeWidth="1.5" strokeDasharray="2 3" />
    </svg>
  );
}

export function VoiceIcon({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="voice-grad" x1="0" y1="0" x2="48" y2="48">
          <stop offset="0%" stopColor="#10b981" />
          <stop offset="100%" stopColor="#06b6d4" />
        </linearGradient>
      </defs>
      <rect x="18" y="6" width="12" height="22" rx="6" stroke="url(#voice-grad)" strokeWidth="2.5" fill="none" />
      <path d="M10 24 Q10 36 24 36 Q38 36 38 24" stroke="url(#voice-grad)" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      <path d="M24 36 L24 42" stroke="url(#voice-grad)" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M18 42 L30 42" stroke="url(#voice-grad)" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M6 22 Q6 24 8 22" stroke="#10b981" strokeWidth="1.5" opacity="0.5" />
      <path d="M40 22 Q40 24 42 22" stroke="#06b6d4" strokeWidth="1.5" opacity="0.5" />
    </svg>
  );
}

export function EmailIcon({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="email-grad" x1="0" y1="0" x2="48" y2="48">
          <stop offset="0%" stopColor="#ec4899" />
          <stop offset="100%" stopColor="#f59e0b" />
        </linearGradient>
      </defs>
      <rect x="4" y="10" width="40" height="28" rx="4" stroke="url(#email-grad)" strokeWidth="2.5" fill="none" />
      <path d="M4 14 L24 28 L44 14" stroke="url(#email-grad)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <circle cx="38" cy="14" r="5" fill="#ec4899" opacity="0.2" />
      <circle cx="38" cy="14" r="5" stroke="#ec4899" strokeWidth="1.5" fill="none" />
      <path d="M38 12 L38 14.5 L40 14.5" stroke="#ec4899" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function DataIcon({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="data-grad" x1="0" y1="0" x2="48" y2="48">
          <stop offset="0%" stopColor="#3b82f6" />
          <stop offset="100%" stopColor="#8b5cf6" />
        </linearGradient>
      </defs>
      <rect x="6" y="30" width="8" height="12" rx="2" fill="url(#data-grad)" opacity="0.3" stroke="url(#data-grad)" strokeWidth="1.5" />
      <rect x="16" y="22" width="8" height="20" rx="2" fill="url(#data-grad)" opacity="0.5" stroke="url(#data-grad)" strokeWidth="1.5" />
      <rect x="26" y="14" width="8" height="28" rx="2" fill="url(#data-grad)" opacity="0.7" stroke="url(#data-grad)" strokeWidth="1.5" />
      <rect x="36" y="6" width="8" height="36" rx="2" fill="url(#data-grad)" opacity="0.9" stroke="url(#data-grad)" strokeWidth="1.5" />
      <path d="M8 28 L20 18 L30 12 L40 6" stroke="url(#data-grad)" strokeWidth="2" strokeLinecap="round" strokeDasharray="3 3" />
    </svg>
  );
}

export function LogisticsIcon({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="logistics-grad" x1="0" y1="0" x2="48" y2="48">
          <stop offset="0%" stopColor="#f97316" />
          <stop offset="100%" stopColor="#ef4444" />
        </linearGradient>
      </defs>
      <circle cx="24" cy="20" r="16" stroke="url(#logistics-grad)" strokeWidth="2.5" fill="none" />
      <circle cx="24" cy="20" r="4" fill="url(#logistics-grad)" opacity="0.3" stroke="url(#logistics-grad)" strokeWidth="2" />
      <path d="M24 20 L30 12" stroke="url(#logistics-grad)" strokeWidth="2" strokeLinecap="round" />
      <path d="M12 38 L18 32" stroke="url(#logistics-grad)" strokeWidth="2" strokeLinecap="round" strokeDasharray="2 3" />
      <path d="M36 38 L30 32" stroke="url(#logistics-grad)" strokeWidth="2" strokeLinecap="round" strokeDasharray="2 3" />
      <circle cx="12" cy="40" r="3" stroke="url(#logistics-grad)" strokeWidth="2" fill="none" />
      <circle cx="36" cy="40" r="3" stroke="url(#logistics-grad)" strokeWidth="2" fill="none" />
    </svg>
  );
}

export function DocumentIcon({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="doc-grad" x1="0" y1="0" x2="48" y2="48">
          <stop offset="0%" stopColor="#8b5cf6" />
          <stop offset="100%" stopColor="#ec4899" />
        </linearGradient>
      </defs>
      <path d="M10 6 L30 6 L38 14 L38 42 L10 42 Z" stroke="url(#doc-grad)" strokeWidth="2.5" strokeLinejoin="round" fill="none" />
      <path d="M30 6 L30 14 L38 14" stroke="url(#doc-grad)" strokeWidth="2.5" strokeLinejoin="round" fill="none" />
      <path d="M16 22 L32 22" stroke="url(#doc-grad)" strokeWidth="2" strokeLinecap="round" />
      <path d="M16 28 L28 28" stroke="url(#doc-grad)" strokeWidth="2" strokeLinecap="round" />
      <path d="M16 34 L24 34" stroke="url(#doc-grad)" strokeWidth="2" strokeLinecap="round" />
      <path d="M28 32 L32 36 L40 28" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// Utility icons
export function RouterIcon({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="router-grad" x1="0" y1="0" x2="48" y2="48">
          <stop offset="0%" stopColor="#6366f1" />
          <stop offset="100%" stopColor="#06b6d4" />
        </linearGradient>
      </defs>
      <circle cx="24" cy="24" r="6" stroke="url(#router-grad)" strokeWidth="2.5" fill="url(#router-grad)" fillOpacity="0.15" />
      <circle cx="24" cy="24" r="14" stroke="url(#router-grad)" strokeWidth="1.5" strokeDasharray="4 3" fill="none" />
      <circle cx="24" cy="24" r="20" stroke="url(#router-grad)" strokeWidth="1" strokeDasharray="2 4" fill="none" opacity="0.5" />
      <circle cx="12" cy="10" r="3" fill="#6366f1" opacity="0.6" />
      <circle cx="38" cy="12" r="3" fill="#06b6d4" opacity="0.6" />
      <circle cx="10" cy="34" r="3" fill="#a855f7" opacity="0.6" />
      <circle cx="38" cy="36" r="3" fill="#06b6d4" opacity="0.6" />
      <path d="M15 12 L20 20" stroke="url(#router-grad)" strokeWidth="1.5" opacity="0.5" />
      <path d="M35 13 L28 20" stroke="url(#router-grad)" strokeWidth="1.5" opacity="0.5" />
      <path d="M13 32 L20 27" stroke="url(#router-grad)" strokeWidth="1.5" opacity="0.5" />
      <path d="M36 34 L28 27" stroke="url(#router-grad)" strokeWidth="1.5" opacity="0.5" />
    </svg>
  );
}

export function FailoverIcon({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="failover-grad" x1="0" y1="0" x2="48" y2="48">
          <stop offset="0%" stopColor="#10b981" />
          <stop offset="100%" stopColor="#6366f1" />
        </linearGradient>
      </defs>
      <path d="M8 24 A16 16 0 0 1 40 24" stroke="url(#failover-grad)" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      <path d="M40 24 A16 16 0 0 1 8 24" stroke="url(#failover-grad)" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="4 3" fill="none" />
      <path d="M36 16 L40 24 L44 16" stroke="url(#failover-grad)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M4 32 L8 24 L12 32" stroke="url(#failover-grad)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
}

export function CostIcon({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="cost-grad" x1="0" y1="0" x2="48" y2="48">
          <stop offset="0%" stopColor="#f59e0b" />
          <stop offset="100%" stopColor="#10b981" />
        </linearGradient>
      </defs>
      <circle cx="24" cy="24" r="18" stroke="url(#cost-grad)" strokeWidth="2.5" fill="none" />
      <path d="M24 10 L24 14" stroke="url(#cost-grad)" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M24 34 L24 38" stroke="url(#cost-grad)" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M18 18 Q18 14 24 14 Q30 14 30 18 Q30 22 24 22 Q18 22 18 26 Q18 30 24 30" stroke="url(#cost-grad)" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      <path d="M24 30 Q30 30 30 26" stroke="url(#cost-grad)" strokeWidth="2.5" strokeLinecap="round" fill="none" />
    </svg>
  );
}

export function BrainIcon({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="brain-grad" x1="0" y1="0" x2="48" y2="48">
          <stop offset="0%" stopColor="#8b5cf6" />
          <stop offset="100%" stopColor="#ec4899" />
        </linearGradient>
      </defs>
      <path d="M24 42 L24 28" stroke="url(#brain-grad)" strokeWidth="2" strokeLinecap="round" />
      <path d="M16 8 Q8 8 8 16 Q4 18 6 24 Q4 28 10 30 Q10 36 18 34 Q22 38 28 34 Q36 36 38 30 Q44 28 42 24 Q44 18 40 16 Q40 8 32 8 Q28 4 24 6 Q20 4 16 8" stroke="url(#brain-grad)" strokeWidth="2.5" strokeLinejoin="round" fill="none" />
      <path d="M24 12 L24 28" stroke="url(#brain-grad)" strokeWidth="1.5" strokeDasharray="2 3" />
      <circle cx="18" cy="18" r="2" fill="#8b5cf6" opacity="0.5" />
      <circle cx="30" cy="18" r="2" fill="#ec4899" opacity="0.5" />
      <circle cx="18" cy="26" r="2" fill="#8b5cf6" opacity="0.5" />
      <circle cx="30" cy="26" r="2" fill="#ec4899" opacity="0.5" />
    </svg>
  );
}

export function ShieldIcon({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="shield-grad" x1="0" y1="0" x2="48" y2="48">
          <stop offset="0%" stopColor="#6366f1" />
          <stop offset="100%" stopColor="#10b981" />
        </linearGradient>
      </defs>
      <path d="M24 4 L40 12 L40 26 Q40 38 24 44 Q8 38 8 26 L8 12 Z" stroke="url(#shield-grad)" strokeWidth="2.5" strokeLinejoin="round" fill="url(#shield-grad)" fillOpacity="0.08" />
      <path d="M18 24 L22 28 L30 18" stroke="url(#shield-grad)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function DatabaseIcon({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="db-grad" x1="0" y1="0" x2="48" y2="48">
          <stop offset="0%" stopColor="#06b6d4" />
          <stop offset="100%" stopColor="#3b82f6" />
        </linearGradient>
      </defs>
      <ellipse cx="24" cy="12" rx="16" ry="6" stroke="url(#db-grad)" strokeWidth="2.5" fill="url(#db-grad)" fillOpacity="0.1" />
      <path d="M8 12 L8 36 Q8 42 24 42 Q40 42 40 36 L40 12" stroke="url(#db-grad)" strokeWidth="2.5" fill="none" />
      <ellipse cx="24" cy="24" rx="16" ry="6" stroke="url(#db-grad)" strokeWidth="1.5" fill="none" opacity="0.4" />
      <ellipse cx="24" cy="36" rx="16" ry="6" stroke="url(#db-grad)" strokeWidth="1.5" fill="none" opacity="0.4" />
    </svg>
  );
}

export function GlobeIcon({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="globe-grad" x1="0" y1="0" x2="48" y2="48">
          <stop offset="0%" stopColor="#3b82f6" />
          <stop offset="100%" stopColor="#a855f7" />
        </linearGradient>
      </defs>
      <circle cx="24" cy="24" r="18" stroke="url(#globe-grad)" strokeWidth="2.5" fill="none" />
      <ellipse cx="24" cy="24" rx="8" ry="18" stroke="url(#globe-grad)" strokeWidth="1.5" fill="none" />
      <path d="M6 24 L42 24" stroke="url(#globe-grad)" strokeWidth="1.5" />
      <path d="M8 16 L40 16" stroke="url(#globe-grad)" strokeWidth="1" opacity="0.5" />
      <path d="M8 32 L40 32" stroke="url(#globe-grad)" strokeWidth="1" opacity="0.5" />
    </svg>
  );
}

export function BoltIcon({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bolt-grad" x1="0" y1="0" x2="48" y2="48">
          <stop offset="0%" stopColor="#f59e0b" />
          <stop offset="100%" stopColor="#ef4444" />
        </linearGradient>
      </defs>
      <path d="M26 4 L10 26 L22 26 L20 44 L38 20 L26 20 Z" stroke="url(#bolt-grad)" strokeWidth="2.5" strokeLinejoin="round" fill="url(#bolt-grad)" fillOpacity="0.15" />
    </svg>
  );
}

export function LockIcon({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="lock-grad" x1="0" y1="0" x2="48" y2="48">
          <stop offset="0%" stopColor="#10b981" />
          <stop offset="100%" stopColor="#6366f1" />
        </linearGradient>
      </defs>
      <rect x="10" y="22" width="28" height="20" rx="4" stroke="url(#lock-grad)" strokeWidth="2.5" fill="url(#lock-grad)" fillOpacity="0.08" />
      <path d="M16 22 L16 14 Q16 6 24 6 Q32 6 32 14 L32 22" stroke="url(#lock-grad)" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      <circle cx="24" cy="32" r="3" fill="url(#lock-grad)" />
      <path d="M24 35 L24 38" stroke="url(#lock-grad)" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

export function SparklesIcon({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="sparkle-grad" x1="0" y1="0" x2="48" y2="48">
          <stop offset="0%" stopColor="#f59e0b" />
          <stop offset="100%" stopColor="#ec4899" />
        </linearGradient>
      </defs>
      <path d="M24 4 L28 18 L42 22 L28 26 L24 40 L20 26 L6 22 L20 18 Z" stroke="url(#sparkle-grad)" strokeWidth="2" strokeLinejoin="round" fill="url(#sparkle-grad)" fillOpacity="0.15" />
      <path d="M38 4 L40 10 L44 8 L42 14 L38 12 Z" stroke="url(#sparkle-grad)" strokeWidth="1.5" fill="url(#sparkle-grad)" fillOpacity="0.3" />
      <path d="M8 34 L10 38 L14 36 L12 40 L8 38 Z" stroke="url(#sparkle-grad)" strokeWidth="1.5" fill="url(#sparkle-grad)" fillOpacity="0.3" />
    </svg>
  );
}

export function LogoIcon({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="logo-grad" x1="0" y1="0" x2="40" y2="40">
          <stop offset="0%" stopColor="#6366f1" />
          <stop offset="50%" stopColor="#a855f7" />
          <stop offset="100%" stopColor="#ec4899" />
        </linearGradient>
      </defs>
      <rect width="40" height="40" rx="12" fill="url(#logo-grad)" />
      <path d="M12 28 L16 14 L20 22 L24 12 L28 28" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <circle cx="20" cy="10" r="2" fill="white" opacity="0.8" />
      <circle cx="31" cy="20" r="1.5" fill="white" opacity="0.5" />
      <circle cx="9" cy="20" r="1.5" fill="white" opacity="0.5" />
    </svg>
  );
}
