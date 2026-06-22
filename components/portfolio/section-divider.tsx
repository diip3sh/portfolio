export const SectionDivider = () => {
  return (
    <div className="flex gap-2.5">
      <div
        className="h-2 w-full"
        aria-hidden="true"
        style={{
          backgroundImage:
            "linear-gradient(-45deg, transparent 46%, var(--color-border) 46%, var(--color-border) 54%, transparent 54%)",
          backgroundSize: "8px 8px",
          backgroundRepeat: "repeat",
        }}
      />
    </div>
  )
}
