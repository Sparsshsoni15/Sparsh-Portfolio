{/* =========================================
    FOLDER GALLERY + TAP HINT
========================================== */}

<div className="mb-7">

  {/* TAP TO OPEN HINT */}

  <motion.div
    initial={{ opacity: 0, y: 5 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{
      duration: 0.5,
      delay: index * 0.08 + 0.15,
    }}
    className="
      mb-3
      flex
      items-center
      justify-center
      gap-2
      font-mono
      text-[10px]
      font-semibold
      uppercase
      tracking-[0.18em]
    "
    style={{
      color: "var(--theme-text-muted)",
    }}
  >
    <span
      className="
        inline-flex
        h-5
        w-5
        items-center
        justify-center
        rounded-full
        border
      "
      style={{
        borderColor:
          "color-mix(in srgb, var(--theme-primary) 25%, transparent)",
        background:
          "color-mix(in srgb, var(--theme-primary) 8%, transparent)",
        color: "var(--theme-primary)",
      }}
    >
      ↓
    </span>

    <span>Tap to Open</span>
  </motion.div>

  {/* FOLDER */}

  <InteractiveFolderGallery
    photos={project.images}
    folderName={`${project.title}.gallery`}
  />
</div>