type ProjectSpinnerProps = {
  visible?: boolean
}

export const ProjectSpinner = ({ visible = false }: ProjectSpinnerProps) => {
  if (!visible) return null

  return (
    <div
      role="status"
      aria-label="Loading projects"
      className="absolute -bottom-10 left-1/2 size-6 -translate-x-1/2"
    >
      <div className="size-6 animate-spin rounded-full border-2 border-dark-gray border-t-gallery-white motion-reduce:animate-none" />
    </div>
  )
}