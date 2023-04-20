import styles from '@/styles/ToHaveClass.module.scss'

export default function ToHaveClass() {
  return (
    <>
      to-have-class
      <div className={`${styles.hidden}`}>ToHaveClass</div>
    </>
  )
}
