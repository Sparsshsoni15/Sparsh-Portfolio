import { useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
function InteractiveFolderGallery({
    photos = [],
    folderName = "Project.gallery",
    dragHintText = "Drag any screenshot down to collect all",
}) {
    const [isFolderOpen, setIsFolderOpen] = useState(false);
    const [hoverFolder, setHoverFolder] = useState(false);
    const [selectedPhoto, setSelectedPhoto] = useState(null);
    const [collectedPhotos, setCollectedPhotos] = useState(new Set());
    const [paperOffsets, setPaperOffsets] = useState({});
    const wasDragged = useRef(false);
    const getPhotoKey = (photo, index) =>
        photo.id ?? photo.image ?? `photo-${index}`;
    const allCollected =
        photos.length > 0 && collectedPhotos.size === photos.length;
    const openFolder = () => {
        if (allCollected) {
            setCollectedPhotos(new Set());
            setPaperOffsets({});
        }
        setIsFolderOpen(true);
        setHoverFolder(false);
    };
    const collectPhoto = (photo, index) => {
        const key = getPhotoKey(photo, index);
        setCollectedPhotos((prev) => {
            const next = new Set(prev);
            next.add(key);
            return next;
        });
        setPaperOffsets((prev) => ({
            ...prev,
            [key]: { x: 0, y: 0 },
        }));
    };
    const collectAllPhotos = () => {
        const allKeys = photos.map((photo, index) =>
            getPhotoKey(photo, index)
        );
        setCollectedPhotos(new Set(allKeys));
        setPaperOffsets({});
    };
    const handlePaperMouseMove = (event, photo, index) => {
        if (!isFolderOpen) return;
        const key = getPhotoKey(photo, index);
        const rect = event.currentTarget.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const mouseX = event.clientX - centerX;
        const mouseY = event.clientY - centerY;
        const offsetX = mouseX * 0.15;
        const offsetY = mouseY * 0.15;
        setPaperOffsets((prev) => ({
            ...prev,
            [key]: {
                x: offsetX,
                y: offsetY,
            },
        }));
    };
    const handlePaperMouseLeave = (photo, index) => {
        const key = getPhotoKey(photo, index);
        setPaperOffsets((prev) => ({
            ...prev,
            [key]: {
                x: 0,
                y: 0,
            },
        }));
    };
    const openPreview = (photo) => {
        if (wasDragged.current) {
            wasDragged.current = false;
            return;
        }
        setSelectedPhoto(photo);
    };
    const closePreview = () => {
        if (!selectedPhoto) return;
        const selectedIndex = photos.findIndex(
            (photo) => photo === selectedPhoto
        );
        const selectedKey = getPhotoKey(
            selectedPhoto,
            selectedIndex
        );
        const wasLastPhoto =
            !collectedPhotos.has(selectedKey) &&
            collectedPhotos.size + 1 >= photos.length;
        collectPhoto(selectedPhoto, selectedIndex);
        setSelectedPhoto(null);
        if (wasLastPhoto) {
            setTimeout(() => {
                setIsFolderOpen(false);
                setHoverFolder(false);
            }, 650);
        }
    };
    const closeFolder = () => {
        setIsFolderOpen(false);
        setHoverFolder(false);
        setPaperOffsets({});
    };
    return (
        <>
            <div className="relative w-full py-8">
                <div
                    className="
                        relative
                        flex
                        min-h-[520px]
                        w-full
                        items-center
                        justify-center
                        overflow-visible
                    "
                    style={{
                        perspective: "1400px",
                    }}
                >
                    <div
                        className="
                            relative
                            flex
                            h-[450px]
                            w-full
                            max-w-[500px]
                            items-center
                            justify-center
                        "
                    >
                        <motion.div
                            className="
                                absolute
                                bottom-12
                                h-[255px]
                                w-[350px]
                            "
                            animate={{
                                scale: isFolderOpen ? 0.98 : 1,
                                y: isFolderOpen ? 4 : 0,
                            }}
                            transition={{
                                type: "spring",
                                stiffness: 180,
                                damping: 22,
                            }}
                        >
                            <motion.div
                                className="
                                    absolute
                                    left-3
                                    top-0
                                    h-12
                                    w-36
                                    rounded-t-2xl
                                    border
                                    border-[var(--theme-border-strong)]
                                    bg-[var(--theme-surface)]
                                    [html[data-theme='valentine']_&]:bg-gradient-to-br
                                    [html[data-theme='valentine']_&]:from-rose-400
                                    [html[data-theme='valentine']_&]:via-pink-500
                                    [html[data-theme='valentine']_&]:to-fuchsia-600
                                    [html[data-theme='aqua']_&]:bg-gradient-to-br
                                    [html[data-theme='aqua']_&]:from-cyan-400
                                    [html[data-theme='aqua']_&]:via-sky-500
                                    [html[data-theme='aqua']_&]:to-teal-600
                                    shadow-[inset_0_1px_0_var(--theme-glow)]
                                "
                                animate={{
                                    x: hoverFolder ? 5 : 0,
                                }}
                                transition={{
                                    type: "spring",
                                    stiffness: 220,
                                    damping: 20,
                                }}
                            />
                            <div
                                className="
                                    absolute
                                    inset-x-0
                                    bottom-0
                                    top-8
                                    overflow-hidden
                                    rounded-b-[26px]
                                    rounded-tr-[26px]
                                    border
                                    border-[var(--theme-border-strong)]
                                    bg-[var(--theme-surface)]
                                    [html[data-theme='valentine']_&]:bg-gradient-to-br
                                    [html[data-theme='valentine']_&]:from-rose-400
                                    [html[data-theme='valentine']_&]:via-pink-500
                                    [html[data-theme='valentine']_&]:to-fuchsia-600
                                    [html[data-theme='aqua']_&]:bg-gradient-to-br
                                    [html[data-theme='aqua']_&]:from-cyan-400
                                    [html[data-theme='aqua']_&]:via-sky-500
                                    [html[data-theme='aqua']_&]:to-teal-600
                                    shadow-[0_25px_60px_rgba(0,0,0,0.3)]
                                "
                            >
                                <motion.div
                                    className="
                                        pointer-events-none
                                        absolute
                                        -inset-10
                                        rounded-full
                                        bg-[var(--theme-glow)]
                                        blur-3xl
                                    "
                                    animate={{
                                        opacity: hoverFolder
                                            ? 0.7
                                            : 0.45,
                                        scale: hoverFolder
                                            ? 1.15
                                            : 1,
                                    }}
                                    transition={{
                                        duration: 0.5,
                                    }}
                                />
                                <div
                                    className="
                                        pointer-events-none
                                        absolute
                                        left-5
                                        right-5
                                        top-2
                                        h-px
                                        bg-gradient-to-r
                                        from-transparent
                                        via-[var(--theme-primary)]
                                        to-transparent
                                        opacity-70
                                    "
                                />
                                <div
                                    className="
                                        pointer-events-none
                                        absolute
                                        inset-3
                                        rounded-[20px]
                                        border
                                        border-[var(--theme-border)]
                                        opacity-70
                                    "
                                />
                            </div>
                        </motion.div>
                        <div
                            className="
                                pointer-events-none
                                absolute
                                bottom-[150px]
                                left-1/2
                                z-40
                                h-[120px]
                                w-[340px]
                                -translate-x-1/2
                            "
                        >
                            {photos.map((photo, index) => {
                                const photoKey = getPhotoKey(
                                    photo,
                                    index
                                );
                                if (
                                    !collectedPhotos.has(
                                        photoKey
                                    )
                                ) {
                                    return null;
                                }
                                const offset =
                                    index -
                                    (photos.length - 1) / 2;
                                const tuckX = offset * 42;
                                const tuckY =
                                    Math.abs(offset) * 3;
                                const tuckRotate =
                                    offset * 4;
                                return (
                                    <motion.button
                                        key={`tucked-${photoKey}`}
                                        type="button"
                                        aria-label={`Preview ${
                                            photo.alt ||
                                            "project screenshot"
                                        }`}
                                        className="
                                            pointer-events-auto
                                            absolute
                                            bottom-0
                                            left-1/2
                                            h-[120px]
                                            w-[210px]
                                            -translate-x-1/2
                                            overflow-hidden
                                            rounded-[18px]
                                            border
                                            border-[var(--theme-border-strong)]
                                            bg-[var(--theme-bg)]
                                            shadow-[0_18px_45px_rgba(0,0,0,0.42)]
                                        "
                                        initial={{
                                            opacity: 0,
                                            scale: 0.7,
                                            y: 30,
                                        }}
                                        animate={{
                                            opacity:
                                                isFolderOpen
                                                    ? 0
                                                    : 1,
                                            scale:
                                                isFolderOpen
                                                    ? 0.82
                                                    : 1,
                                            x: isFolderOpen
                                                ? 0
                                                : tuckX,
                                            y: isFolderOpen
                                                ? 20
                                                : tuckY,
                                            rotate: isFolderOpen
                                                ? 0
                                                : tuckRotate,
                                        }}
                                        transition={{
                                            type: "spring",
                                            stiffness: 180,
                                            damping: 20,
                                            mass: 0.8,
                                            delay:
                                                index * 0.04,
                                        }}
                                        whileHover={
                                            !isFolderOpen
                                                ? {
                                                      scale: 1.04,
                                                      y:
                                                          tuckY -
                                                          5,
                                                  }
                                                : {}
                                        }
                                        onClick={(event) => {
                                            event.stopPropagation();
                                            openPreview(photo);
                                        }}
                                        style={{
                                            zIndex: 45 + index,
                                        }}
                                    >
                                        <img
                                            src={photo.image}
                                            alt={
                                                photo.alt ||
                                                "Project screenshot thumbnail"
                                            }
                                            className="
                                                h-full
                                                w-full
                                                select-none
                                                bg-[var(--theme-bg)]
                                                object-contain
                                            "
                                            draggable="false"
                                        />
                                        <div
                                            className="
                                                pointer-events-none
                                                absolute
                                                inset-0
                                                bg-gradient-to-t
                                                from-black/20
                                                via-transparent
                                                to-white/5
                                            "
                                        />
                                    </motion.button>
                                );
                            })}
                        </div>
                        <div
                            className="
                                absolute
                                bottom-[105px]
                                z-50
                                flex
                                items-center
                                justify-center
                            "
                        >
                            {photos.map((photo, index) => {
                                const photoKey =
                                    getPhotoKey(
                                        photo,
                                        index
                                    );
                                const isCollected =
                                    collectedPhotos.has(
                                        photoKey
                                    );
                                const offset =
                                    index -
                                    (photos.length - 1) / 2;
                                const stackX =
                                    offset * 3;
                                const stackY =
                                    offset * -5;
                                const stackRotate =
                                    offset * 3;
                                const openX =
                                    offset * 125;
                                const openY = -130;
                                const magneticOffset =
                                    paperOffsets[
                                        photoKey
                                    ] || {
                                        x: 0,
                                        y: 0,
                                    };
                                return (
                                    <motion.div
                                        key={photoKey}
                                        className={`
                                            absolute
                                            bottom-0
                                            h-72
                                            w-56
                                            overflow-hidden
                                            rounded-2xl
                                            border
                                            border-[var(--theme-border-strong)]
                                            bg-[var(--theme-surface)]
                                            shadow-[0_22px_50px_rgba(0,0,0,0.4)]
                                            origin-bottom
                                            ${
                                                isFolderOpen &&
                                                !isCollected
                                                    ? "pointer-events-auto cursor-pointer"
                                                    : "pointer-events-none"
                                            }
                                        `}
                                        animate={
                                            isCollected
                                                ? {
                                                      x: 0,
                                                      y: 90,
                                                      scale: 0.12,
                                                      rotate: 0,
                                                      opacity: 0,
                                                      zIndex: 5,
                                                  }
                                                : isFolderOpen
                                                ? {
                                                      x:
                                                          openX +
                                                          magneticOffset.x,
                                                      y:
                                                          openY +
                                                          magneticOffset.y,
                                                      rotate:
                                                          magneticOffset.x *
                                                          0.025,
                                                      scale: 1.02,
                                                      opacity: 1,
                                                      zIndex:
                                                          50 +
                                                          index,
                                                  }
                                                : {
                                                      x: stackX,
                                                      y: stackY,
                                                      rotate:
                                                          stackRotate,
                                                      scale:
                                                          1 -
                                                          Math.abs(
                                                              offset
                                                          ) *
                                                              0.025,
                                                      opacity: 0,
                                                      zIndex: 1,
                                                  }
                                        }
                                        whileHover={
                                            isFolderOpen &&
                                            !isCollected
                                                ? {
                                                      scale: 1.05,
                                                  }
                                                : {}
                                        }
                                        whileDrag={{
                                            scale: 1.1,
                                            rotate: 4,
                                            zIndex: 1000,
                                        }}
                                        transition={{
                                            type: "spring",
                                            stiffness: 180,
                                            damping: 22,
                                            mass: 0.85,
                                        }}
                                        style={{
                                            transformOrigin:
                                                "bottom center",
                                            willChange:
                                                "transform",
                                        }}
                                        drag={
                                            isFolderOpen &&
                                            !isCollected
                                                ? true
                                                : false
                                        }
                                        dragSnapToOrigin
                                        dragElastic={0.1}
                                        onMouseMove={(event) =>
                                            handlePaperMouseMove(
                                                event,
                                                photo,
                                                index
                                            )
                                        }
                                        onMouseLeave={() =>
                                            handlePaperMouseLeave(
                                                photo,
                                                index
                                            )
                                        }
                                        onDragStart={() => {
                                            wasDragged.current =
                                                true;
                                        }}
                                        onDragEnd={(
                                            event,
                                            info
                                        ) => {
                                            setTimeout(() => {
                                                wasDragged.current =
                                                    false;
                                            }, 60);
                                            if (
                                                info.offset.y >
                                                100
                                            ) {
                                                collectAllPhotos();
                                                setTimeout(() => {
                                                    setIsFolderOpen(
                                                        false
                                                    );
                                                    setHoverFolder(
                                                        false
                                                    );
                                                    setPaperOffsets(
                                                        {}
                                                    );
                                                }, 650);
                                            }
                                        }}
                                        onClick={() => {
                                            if (
                                                !isCollected
                                            ) {
                                                openPreview(
                                                    photo
                                                );
                                            }
                                        }}
                                    >
                                        <div
                                            className="
                                                pointer-events-none
                                                absolute
                                                inset-0
                                                bg-white
                                            "
                                        />
                                        <img
                                            src={photo.image}
                                            alt={
                                                photo.alt ||
                                                "Project screenshot"
                                            }
                                            className="
                                                relative
                                                z-10
                                                h-full
                                                w-full
                                                select-none
                                                bg-[var(--theme-bg)]
                                                object-contain
                                            "
                                            draggable="false"
                                        />
                                        {isFolderOpen &&
                                            !isCollected && (
                                                <div
                                                    className="
                                                        pointer-events-none
                                                        absolute
                                                        inset-0
                                                        z-20
                                                        bg-gradient-to-t
                                                        from-black/25
                                                        via-transparent
                                                        to-white/5
                                                    "
                                                />
                                            )}
                                        {isFolderOpen &&
                                            !isCollected && (
                                                <motion.div
                                                    className="
                                                        pointer-events-none
                                                        absolute
                                                        inset-0
                                                        z-30
                                                        rounded-2xl
                                                        border
                                                        border-[var(--theme-primary)]
                                                    "
                                                    animate={{
                                                        opacity:
                                                            magneticOffset.x !==
                                                                0 ||
                                                            magneticOffset.y !==
                                                                0
                                                                ? 0.35
                                                                : 0,
                                                    }}
                                                    transition={{
                                                        duration: 0.2,
                                                    }}
                                                />
                                            )}
                                        {isFolderOpen &&
                                            !isCollected && (
                                                <div
                                                    className="
                                                        pointer-events-none
                                                        absolute
                                                        bottom-3
                                                        left-1/2
                                                        z-40
                                                        -translate-x-1/2
                                                        rounded-full
                                                        border
                                                        border-[var(--theme-border-strong)]
                                                        bg-[var(--theme-surface)]
                                                        px-3
                                                        py-1.5
                                                        text-[9px]
                                                        font-semibold
                                                        uppercase
                                                        tracking-[0.14em]
                                                        text-[var(--theme-text)]
                                                        opacity-0
                                                        backdrop-blur-md
                                                    "
                                                >
                                                    Preview
                                                </div>
                                            )}
                                    </motion.div>
                                );
                            })}
                        </div>
                        <motion.div
                            className="
                                absolute
                                bottom-7
                                z-[100]
                                h-[185px]
                                w-[375px]
                                cursor-pointer
                                drop-shadow-[0_25px_45px_rgba(0,0,0,0.3)]
                            "
                            style={{
                                transformOrigin:
                                    "bottom center",
                                transformStyle:
                                    "preserve-3d",
                                pointerEvents:
                                    isFolderOpen
                                        ? "none"
                                        : "auto",
                            }}
                            animate={{
                                rotateX: hoverFolder
                                    ? -18
                                    : 0,
                                rotateY: hoverFolder
                                    ? -2
                                    : 0,
                                y: hoverFolder ? 7 : 0,
                                scale: hoverFolder
                                    ? 1.025
                                    : 1,
                            }}
                            transition={{
                                type: "spring",
                                stiffness: 180,
                                damping: 20,
                                mass: 0.8,
                            }}
                            onMouseEnter={() =>
                                setHoverFolder(true)
                            }
                            onMouseLeave={() =>
                                setHoverFolder(false)
                            }
                            onClick={openFolder}
                        >
                            <div
                                className="
                                    relative
                                    flex
                                    h-full
                                    w-full
                                    items-end
                                    justify-center
                                    overflow-hidden
                                    rounded-[26px]
                                    border
                                    border-[var(--theme-border-strong)]
                                    bg-[var(--theme-surface)]
                                    [html[data-theme='valentine']_&]:bg-gradient-to-br
                                    [html[data-theme='valentine']_&]:from-rose-400
                                    [html[data-theme='valentine']_&]:via-pink-500
                                    [html[data-theme='valentine']_&]:to-fuchsia-600
                                    [html[data-theme='aqua']_&]:bg-gradient-to-br
                                    [html[data-theme='aqua']_&]:from-cyan-400
                                    [html[data-theme='aqua']_&]:via-sky-500
                                    [html[data-theme='aqua']_&]:to-teal-600
                                    pb-8
                                    shadow-[0_25px_70px_rgba(0,0,0,0.35)]
                                "
                            >
                                <div
                                    className="
                                        pointer-events-none
                                        absolute
                                        inset-0
                                        bg-gradient-to-b
                                        from-[var(--theme-glow)]
                                        via-transparent
                                        to-transparent
                                        opacity-70
                                    "
                                />
                                <div
                                    className="
                                        pointer-events-none
                                        absolute
                                        left-4
                                        right-4
                                        top-0
                                        h-px
                                        bg-gradient-to-r
                                        from-transparent
                                        via-[var(--theme-primary)]
                                        to-transparent
                                        opacity-90
                                    "
                                />
                                <motion.div
                                    className="
                                        pointer-events-none
                                        absolute
                                        left-1/2
                                        top-1/2
                                        h-36
                                        w-64
                                        -translate-x-1/2
                                        -translate-y-1/2
                                        rounded-full
                                        bg-[var(--theme-glow)]
                                        blur-3xl
                                    "
                                    animate={{
                                        scale: hoverFolder
                                            ? 1.3
                                            : 1,
                                        opacity: hoverFolder
                                            ? 0.8
                                            : 0.45,
                                    }}
                                    transition={{
                                        duration: 0.45,
                                    }}
                                />
                                <div
                                    className="
                                        pointer-events-none
                                        absolute
                                        inset-3
                                        rounded-[21px]
                                        border
                                        border-[var(--theme-border)]
                                        opacity-70
                                    "
                                />
                                <motion.div
                                    className="
                                        relative
                                        z-[150]
                                        flex
                                        items-center
                                        justify-center
                                        rounded-xl
                                        border
                                        border-[var(--theme-border-strong)]
                                        bg-[var(--theme-surface)]
                                        [html[data-theme='valentine']_&]:bg-gradient-to-br
                                    [html[data-theme='valentine']_&]:from-rose-400
                                    [html[data-theme='valentine']_&]:via-pink-500
                                    [html[data-theme='valentine']_&]:to-fuchsia-600
                                        [html[data-theme='aqua']_&]:bg-gradient-to-br
                                    [html[data-theme='aqua']_&]:from-cyan-400
                                    [html[data-theme='aqua']_&]:via-sky-500
                                    [html[data-theme='aqua']_&]:to-teal-600
                                        px-6
                                        py-3
                                        shadow-[0_8px_25px_rgba(0,0,0,0.2)]
                                    "
                                    animate={{
                                        y: hoverFolder
                                            ? -4
                                            : 0,
                                        scale: hoverFolder
                                            ? 1.03
                                            : 1,
                                    }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 240,
                                        damping: 18,
                                    }}
                                >
                                    <span
                                        className="
                                            theme-text
                                            text-sm
                                            font-semibold
                                            tracking-[0.04em]
                                        "
                                    >
                                        {folderName}
                                    </span>
                                </motion.div>
                                <motion.div
                                    className="
                                        absolute
                                        bottom-3
                                        left-1/2
                                        h-1
                                        -translate-x-1/2
                                        rounded-full
                                        bg-[var(--theme-primary)]
                                    "
                                    animate={{
                                        width: hoverFolder
                                            ? 48
                                            : 28,
                                        opacity: hoverFolder
                                            ? 1
                                            : 0.5,
                                    }}
                                    transition={{
                                        duration: 0.3,
                                    }}
                                />
                            </div>
                        </motion.div>
                    </div>
                    <motion.div
                        animate={{
                            opacity:
                                isFolderOpen &&
                                !allCollected
                                    ? 1
                                    : 0,
                            y:
                                isFolderOpen &&
                                !allCollected
                                    ? 0
                                    : 20,
                        }}
                        transition={{
                            duration: 0.4,
                            ease: "easeOut",
                        }}
                        className="
                            pointer-events-none
                            absolute
                            bottom-0
                            rounded-full
                            border
                            border-[var(--theme-border)]
                            bg-[var(--theme-glow)]
                            px-5
                            py-2.5
                            text-center
                            text-[10px]
                            font-semibold
                            uppercase
                            tracking-[0.14em]
                            text-[var(--theme-text-muted)]
                            backdrop-blur-xl
                        "
                    >
                        {dragHintText}
                    </motion.div>
                </div>
            </div>
            <AnimatePresence>
                {selectedPhoto && (
                    <motion.div
                        initial={{
                            opacity: 0,
                        }}
                        animate={{
                            opacity: 1,
                        }}
                        exit={{
                            opacity: 0,
                        }}
                        transition={{
                            duration: 0.25,
                            ease: "easeOut",
                        }}
                        className="
                            fixed
                            inset-0
                            z-[9999]
                            flex
                            items-center
                            justify-center
                            bg-black/90
                            p-3
                            backdrop-blur-xl
                            sm :p-5
                            md :p-8
                        "
                        onClick={closePreview}
                    >
                        <motion.div
                            initial={{
                                opacity: 0,
                                scale: 0.94,
                                y: 25,
                            }}
                            animate={{
                                opacity: 1,
                                scale: 1,
                                y: 0,
                            }}
                            exit={{
                                opacity: 0,
                                scale: 0.96,
                                y: 15,
                            }}
                            transition={{
                                type: "spring",
                                stiffness: 200,
                                damping: 24,
                                mass: 0.8,
                            }}
                            className="
                                relative
                                flex
                                h-[calc(100vh-24px)]
                                w-[calc(100vw-24px)]
                                items-center
                                justify-center
                                sm :h-[calc(100vh-40px)]
                                sm :w-[calc(100vw-40px)]
                                md :h-[calc(100vh-64px)]
                                md :w-[calc(100vw-64px)]
                            "
                            onClick={(event) => {
                                event.stopPropagation();
                            }}
                        >
                            <div
                                className="
                                    relative
                                    flex
                                    h-full
                                    w-full
                                    items-center
                                    justify-center
                                    overflow-hidden
                                    rounded-2xl
                                    border
                                    border-white/15
                                    bg-[#050505]
                                    shadow-[0_30px_120px_rgba(0,0,0,0.75)]
                                "
                            >
                                <img
                                    src={selectedPhoto.image}
                                    alt={
                                        selectedPhoto.alt ||
                                        "Project screenshot preview"
                                    }
                                    className="
                                        max-h-full
                                        max-w-full
                                        select-none
                                        object-contain
                                    "
                                    draggable="false"
                                />
                                <button
                                    type="button"
                                    onClick={closePreview}
                                    className="
                                        absolute
                                        right-4
                                        top-4
                                        z-30
                                        flex
                                        h-11
                                        w-11
                                        items-center
                                        justify-center
                                        rounded-full
                                        border
                                        border-white/20
                                        bg-black/65
                                        text-2xl
                                        leading-none
                                        text-white
                                        shadow-xl
                                        backdrop-blur-xl
                                        transition-all
                                        duration-300
                                        hover :scale-110
                                        hover :bg-black/85
                                        active :scale-95
                                    "
                                    aria-label="Close screenshot preview"
                                >
                                    ×
                                </button>
                                {selectedPhoto.alt && (
                                    <div
                                        className="
                                            absolute
                                            bottom-5
                                            left-1/2
                                            z-20
                                            max-w-[85%]
                                            -translate-x-1/2
                                            rounded-full
                                            border
                                            border-white/15
                                            bg-black/65
                                            px-4
                                            py-2
                                            text-center
                                            text-xs
                                            font-medium
                                            text-white
                                            shadow-lg
                                            backdrop-blur-xl
                                        "
                                    >
                                        {selectedPhoto.alt}
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
export default InteractiveFolderGallery;
