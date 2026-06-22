"use client"

import { useCallback, useEffect, useRef, useState } from "react"

import { playSound, type SoundPlayback } from "@/lib/sound-engine"
import type {
  PlayFunction,
  SoundAsset,
  SoundControls,
  UseSoundOptions,
  UseSoundReturn,
} from "@/lib/sound-types"

export const useSound = (
  sound: SoundAsset,
  options: UseSoundOptions = {}
): UseSoundReturn => {
  const playbackRef = useRef<SoundPlayback | null>(null)
  const optionsRef = useRef(options)
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
    optionsRef.current = options
  }, [options])

  useEffect(() => {
    return () => {
      playbackRef.current?.stop()
      playbackRef.current = null
    }
  }, [])

  const stop = useCallback(() => {
    playbackRef.current?.stop()
    playbackRef.current = null
    setIsPlaying(false)
    optionsRef.current.onStop?.()
  }, [])

  const play: PlayFunction = useCallback(
    (overrides) => {
      const currentOptions = optionsRef.current

      if (currentOptions.soundEnabled === false) {
        return
      }

      if (currentOptions.interrupt) {
        playbackRef.current?.stop()
        playbackRef.current = null
      }

      void playSound(sound.dataUri, {
        volume: overrides?.volume ?? currentOptions.volume,
        playbackRate: overrides?.playbackRate ?? currentOptions.playbackRate,
        onEnd: () => {
          playbackRef.current = null
          setIsPlaying(false)
          currentOptions.onEnd?.()
        },
      }).then((playback) => {
        playbackRef.current = playback
        setIsPlaying(true)
        currentOptions.onPlay?.()
      }).catch(() => {
        playbackRef.current = null
        setIsPlaying(false)
      })
    },
    [sound.dataUri]
  )

  const controls: SoundControls = {
    stop,
    pause: stop,
    isPlaying,
    duration: sound.duration,
    sound,
  }

  return [play, controls] as const
}
