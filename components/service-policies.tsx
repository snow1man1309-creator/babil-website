import React from 'react';
import { ShieldCheck, CreditCard, Clock, RefreshCw, FileText } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function ServicePolicies() {
  const { t } = useTranslation();

  return (
    <div className="mt-20 pt-16 border-t border-neutral-200 dark:border-neutral-800">
      <h2 className="text-3xl font-bold mb-10 text-black dark:text-white">
        {t('policies.title')}
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Terms Card */}
        <div className="p-8 rounded-2xl bg-neutral-50 dark:bg-neutral-900/30 border border-blue-600 dark:border-blue-500">
            <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-white dark:bg-black rounded-lg border border-neutral-200 dark:border-neutral-800">
                    <FileText className="size-5 text-black dark:text-white" />
                </div>
                <h3 className="text-xl font-bold text-black dark:text-white">{t('policies.terms.title')}</h3>
            </div>
            
            <ul className="space-y-8">
                <li className="flex gap-4">
                    <div className="mt-1 shrink-0">
                        <Clock className="size-5 text-neutral-400" />
                    </div>
                    <div>
                        <span className="font-bold text-sm block mb-1 text-black dark:text-white">{t('policies.terms.timeline.label')}</span>
                        <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                            {t('policies.terms.timeline.desc')}
                        </p>
                    </div>
                </li>
                 <li className="flex gap-4">
                    <div className="mt-1 shrink-0">
                        <RefreshCw className="size-5 text-neutral-400" />
                    </div>
                    <div>
                        <span className="font-bold text-sm block mb-1 text-black dark:text-white">{t('policies.terms.revisions.label')}</span>
                        <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                            {t('policies.terms.revisions.desc')}
                        </p>
                    </div>
                </li>
            </ul>
        </div>

        {/* Billing Card - Redesigned for cleaner look */}
        <div className="p-8 rounded-2xl bg-neutral-50 dark:bg-neutral-900/30 border border-blue-600 dark:border-blue-500 flex flex-col">
             <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-white dark:bg-black rounded-lg border border-neutral-200 dark:border-neutral-800">
                    <CreditCard className="size-5 text-black dark:text-white" />
                </div>
                <h3 className="text-xl font-bold text-black dark:text-white">{t('policies.payment.title')}</h3>
            </div>
            
            <div className="flex-1 flex flex-col justify-center py-4">
                {/* Visual Split Bar */}
                <div className="flex w-full h-3 rounded-full overflow-hidden mb-8">
                    <div className="w-[40%] bg-black dark:bg-white h-full relative"></div>
                    <div className="w-[60%] bg-neutral-200 dark:bg-neutral-800 h-full"></div>
                </div>

                <div className="flex justify-between items-start">
                    <div>
                        <div className="flex items-baseline gap-1.5">
                            <span className="text-4xl font-black text-black dark:text-white">40%</span>
                            <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-500 transform -translate-y-1">{t('policies.payment.deposit.label')}</span>
                        </div>
                        <p className="text-xs text-neutral-500 mt-2 max-w-[140px] leading-relaxed">
                            {t('policies.payment.deposit.desc')}
                        </p>
                    </div>
                    <div className="text-right">
                         <div className="flex items-baseline gap-1.5 justify-end">
                            <span className="text-4xl font-black text-black dark:text-white">60%</span>
                            <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-500 transform -translate-y-1">{t('policies.payment.final.label')}</span>
                        </div>
                        <p className="text-xs text-neutral-500 mt-2 max-w-[140px] ml-auto leading-relaxed">
                            {t('policies.payment.final.desc')}
                        </p>
                    </div>
                </div>
            </div>
            
             <div className="flex items-center gap-3 pt-6 border-t border-neutral-200 dark:border-neutral-800 mt-auto">
                <div className="bg-emerald-100 dark:bg-emerald-900/30 p-1.5 rounded-full shrink-0">
                     <ShieldCheck className="size-4 text-emerald-600 dark:text-emerald-400" />
                </div>
                <span className="text-xs font-medium text-neutral-600 dark:text-neutral-400">{t('policies.payment.secure')}</span>
            </div>
        </div>
      </div>
    </div>
  );
}
