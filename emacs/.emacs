(global-set-key (kbd "<f5>") 'eval-buffer);����.emacs
(global-set-key (kbd "<f6>") 'uncomment-region);����ע��
(global-set-key (kbd "<f7>") 'replace-string);���ı��滻
(global-set-key (kbd "<f8>") 'dired);Ŀ¼�滻
(global-set-key (kbd "<f9>") 'set-mark-command);���
(global-set-key (kbd "<f10>") 'moccur-grep-find);���ļ�����
;(global-set-key (kbd "<f11>") 'ediff-files);�Ƚ�
(global-set-key (kbd "<f12>") 'delete-trailing-whitespace);ɾ����β�ո�
(global-set-key [(control tab)] 'tabbar-forward);�л���ǩ��ǰ
(global-set-key [(control shift tab)] 'tabbar-backward);���
(global-set-key (kbd "C-x a") 'calendar);����
(global-set-key (kbd "C-x s") 'bc-set);����bookmark
(global-set-key (kbd "C-x p") 'bc-previous);��һ��bookmark
(global-set-key (kbd "C-x n") 'bc-next);��һ��
(global-set-key (kbd "C-x l") 'bc-list)
(global-set-key (kbd "C-x c") 'bc-clear);���bookmark
(global-set-key (kbd "C-c o") 'occur)

(fset 'pr
   [?e ?c ?h ?o ?  ?\" ?\" ?\C-b ?< ?> ?\C-b ?p ?r ?e ?\C-e ?\; return ?p ?r ?i ?n ?t ?_ ?r ?\( ?\) ?\C-b ?\C-e ?\; return ?e ?x ?i ?t ?\; ?\C-p ?\C-e ?\C-b ?\C-b ?$])
(setq visible-bell t);ȡ��bell
(setq inhibit-startup-message t);ȡ����ӭ����
(setq column-number-mode t);��ʾ����
(setq kill-ring-max 250);���������
(setq scroll-margin 3
      scroll-conservatively 10000);ʹ��ҳ����Ӳ
;(mouse-avoidance-mode 'animate);����ƶ�����꣬����Զ��ƿ�
(fset 'yes-or-no-p 'y-or-n-p)
(tool-bar-mode nil);���ع�����
(setq indent-tabs-mode nil)
(setq-default tab-width 4)
(setq frame-title-format
            '("emacs@ " (buffer-file-name "%f "
                (dired-directory dired-directory "%b"))))
(setq default-frame-alist '((height . 40) (width . 100)))
(prefer-coding-system       'utf-8)
(set-default-coding-systems 'utf-8)
(global-linum-mode t)
(setq-default case-fold-search nil)
(setq backup-directory-alist (quote (("." . "D:/emacs/backup"))));����~�ļ�Ŀ¼

(load "hideshow")
(defun toggle-selective-display (column)
  (interactive "P")
  (set-selective-display
   (or column
       (unless selective-display
         (1+ (current-column))))))
(defun toggle-hiding (column)
  (interactive "P")
  (if hs-minor-mode
      (if (condition-case nil
              (hs-toggle-hiding)
            (error t))
          (hs-show-all))
    (toggle-selective-display column)))

(global-set-key (kbd "C-+") 'toggle-hiding)
(global-set-key (kbd "C-\\") 'toggle-selective-display)

(add-hook 'c-mode-hook 'hs-minor-mode)
(add-hook 'c++-mode-hook 'hs-minor-mode)
(add-hook 'java-mode-hook 'hs-minor-mode)
(add-hook 'javascript-mode-hook 'hs-minor-mode)
(add-hook 'php-mode-hook 'hs-minor-mode)
(add-hook 'emacs-list-mode-hook 'hs-minor-mode)

;expand
(require 'cl)
(add-to-list 'load-path "D:/emacs/emacs_expand")

;(require 'ediff+)

;(require 'bookmark+)

(require 'color-moccur)
(require 'moccur-edit)
(require 'breadcrumb)
(require 'tabbar)
(tabbar-mode t)

(add-to-list 'load-path "D:/emacs/emacs_expand/color-theme-6.6.0")
(require 'color-theme)
(color-theme-initialize)
(color-theme-arjen)

(require 'php-mode)
(setq c-basic-offset 4)
(setq indent-tabs-mode nil)

(setq-default ispell-program-name "D:/emacs/emacs_expand/aspell/bin/aspell.exe")
(setq text-mode-hook '(lambda() (flyspell-mode t) ))

(add-to-list 'load-path  "D:/emacs/emacs_expand/cc-mode")
(require 'cc-mode)

(add-to-list 'load-path "D:/emacs/emacs_expand/session/lisp")
(require 'session)
(add-hook 'after-init-hook
          'session-initialize)

;undefined function
(defun remove-dos-eol ()
  "Do not show ^M in files containing mixed UNIX and DOS line endings."
  (interactive)
  (setq buffer-display-table (make-display-table))
  (aset buffer-display-table ?\^M []))
(custom-set-variables
  ;; custom-set-variables was added by Custom.
  ;; If you edit it by hand, you could mess it up, so be careful.
  ;; Your init file should contain only one such instance.
  ;; If there is more than one, they won't work right.
 '(bmkp-last-as-first-bookmark-file "~\\.emacs.bmk")
 '(session-use-package t nil (session)))

(display-time)
(show-paren-mode t)