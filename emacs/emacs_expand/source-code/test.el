;(lambda (a b c) (+ a b c)
;  1 (* 2 3) (- 5 4))

;(if nil
;	(print 'true)
;  'very-false)

;(setq x 2)

'(this is a test)

(defun capitalize-backwards ()
  (interactive)
  (backward-word 1)
  (forward-word 1)
  (backward-char 1)
  (capitalize-word 1))

(defun wbf () 5)
(wbf)
