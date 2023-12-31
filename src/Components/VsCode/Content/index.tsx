import { ReactNode } from 'react'

export function VsCodeContent({ children }: { children: ReactNode }) {
  return (
    <div
      className="max-h-[70vh] w-full overflow-y-auto overflow-x-hidden bg-vs-content text-white"
      style={{
        gridArea: 'content',
      }}
    >
      {children}
    </div>
  )
}
